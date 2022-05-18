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
import {mapActions, mapState} from "vuex"
import MyPreloader from "@/components/MyPreloader";
export default {
  components: {MyPreloader, MainHeader},

  methods: {
    ...mapActions({
      loadFilms: 'films/loadFilms',
      loadFilmInfo: 'films/loadFilmInfo',
      loadFilmImage: 'films/loadFilmImage',
      loadFilmStaff: 'films/loadFilmStaff',
      loadReactions: 'reactions/loadReactions'
    })
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoadingFilms,
      page: state => state.page
    }),
  },

  created() {
    // this.loadReactions(100)
    this.loadFilms({page: this.page})
  }

}
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
}

</style>