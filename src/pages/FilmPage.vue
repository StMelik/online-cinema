<template>
  <p v-if="isLoadingFilmInfo">Загрузка</p>
  <div v-else class="film-page">
    <h2 class="film-page__title">{{ filmInfo.name }}</h2>
    <img
        :src="filmInfo.image"
        :alt="filmInfo.name"
        class="film-page__image"
    >
    <div class="film-page__description-box">
      <p class="film-page__content-title">Немного о сюжете:</p>
      <p class="film-page__content-text">{{ filmInfo.description }}</p>
      <p class="film-page__content-title">Рейтинг:</p>
      <p class="film-page__content-text">{{ filmInfo.rating }}</p>
      <p class="film-page__content-title">Актерский состав:</p>
      <p class="film-page__content-text">{{ filmActors }}</p>
      <p class="film-page__content-title">Режиссеры:</p>
      <p class="film-page__content-text">{{ filmDirectors }}</p>
    </div>
    <div class="film-page__review-box">
      <a
          class="button film-page__link"
          :href="filmInfo.webUrl"
          target="_blank"
      >
        Смотреть фильм на кинопоиске
      </a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
  // data() {
  //   return {
  //     isEmpty: false,
  //   }
  // },

  methods: {
    ...mapMutations({
      setIsLoadingFilmInfo: 'loader/SET_IS_LOADING_FILM_INFO'
    }),

    ...mapActions({
      loadFilmInfo: 'filmInfo/loadFilmInfo',
    }),

  },

  created() {
    this.loadFilmInfo(this.$route.params.id)

    // const film = this.films.find(film => film.kinopoiskId == this.$route.params.id)
    // console.log(this.films)
    // console.log(this.$route.params.id)
    // console.log(film)
    // if (film) {
    //   this.isEmpty = false
    //   this.film = film
    // } else {
    //   this.isEmpty = true
    //   this.film = {
    //     imageUrl: 'https://w-dog.ru/wallpapers/14/2/511224256308748/art-kino-katushka-kinoplenka-xlopushka-popkorn-abstrakciya-3d-oboi.jpg',
    //     title: 'Такого фильма еще нет',
    //   }
    // }


  },
  computed: {
    ...mapState({
      isLoadingFilmInfo: state => state.loader.isLoadingFilmInfo,
      films: state => state.films.films,
      filmInfo: state => state.filmInfo,
    }),

    ...mapGetters({
      filmDirectors: "filmInfo/getFilmDirectors",
      filmActors: "filmInfo/getFilmActors",
    })
  }
}
</script>

<style scoped>
.film-page {
  padding: 30px 0;
}

.film-page__title {
  position: relative;
  font-size: 32px;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.film-page__image {
  margin-bottom: 25px;
  object-fit: cover;
  object-position: center;
}

.film-page__content-title {
  color: #e15353;
  font-size: 20px;
}

.film-page__content-text {

}

.film-page p:not(:last-of-type) {
  margin-bottom: 10px;
}

.film-page__description-box {
  position: relative;
  padding-bottom: 15px;
}

.film-page__title::after,
.film-page__description-box::after {
  content: '';
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #e15353 0%, #e1535300 80%);
}

.film-page__review-box {
  padding-top: 30px;
}

.film-page__review-title {
  font-size: 24px;
}

.film-page__review-text {
  margin-bottom: 15px;
  color: #e15353;
}

.film-page__review-list {
  display: flex;
  gap: 15px;
}

.film-page__review-item {

}
</style>