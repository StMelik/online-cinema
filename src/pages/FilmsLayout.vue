<template>
  <div class="films-layout">
    <MainHeader/>
    <div class="container">
      <div v-if="isLoading" class="preloader">
        <p class="preloader__text">ЗАГРУЗКА...</p>
      </div>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import {mapActions, mapState} from "vuex"
export default {
  components: {MainHeader},

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
      isLoading: state => state.isLoadingFilms
    }),
  },

  created() {
    this.loadReactions(100)
    this.loadFilms(2)
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

.preloader__text {
  font-size: 82px;
  color: teal;
}
</style>