<template>
  <div class="films-layout">
    <MainHeader/>
    <div class="container">
      <div v-if="isLoading" class="preloader">
        <MyPreloader/>
      </div>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import {mapActions, mapMutations, mapState} from "vuex"
import MyPreloader from "@/components/MyPreloader";

export default {
  components: {MyPreloader, MainHeader},

  methods: {
    ...mapMutations({
      loadFavoriteFilms: 'favorite/LOAD_FAVORITE_FILMS'
    }),

    ...mapActions({
      loadFilms: 'films/loadFilms',
    }),
  },

  computed: {
    ...mapState({
      isLoading: state => state.loader.isLoadingFilms,
      page: state => state.pagination.page
    }),
  },

  created() {
    if (localStorage.getItem('favoriteFilms')) {
      this.loadFavoriteFilms(JSON.parse(localStorage.getItem('favoriteFilms')))
    }
    this.loadFilms({page: this.page})
  },

}
</script>

<style>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
}
</style>