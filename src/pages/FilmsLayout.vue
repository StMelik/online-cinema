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
import {mapActions, mapGetters} from "vuex"
export default {
  components: {MainHeader},
  methods: {
    ...mapActions({
      loadReactions: 'reactions/loadReactions',
      loadFilms: 'films/loadFilms'
    })
  },
  created() {
    this.loadReactions(3000)
    this.loadFilms(1000)
  },
  computed: {
    ...mapGetters({
      getLoading: "getIsLoadingFilms"
    }),
    isLoading() {
      return this.getLoading
    }
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