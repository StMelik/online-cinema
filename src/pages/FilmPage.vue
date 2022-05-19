<template>
  <div v-if="isLoadingFilmInfo" class="preloader">
    <MyPreloader/>
  </div>
  <div v-else class="film-page">
    <h2 class="film-page__title">{{ filmInfo.name }} ({{ filmInfo.year }} г.)</h2>
    <img
        :src="filmInfo.image || filmInfo.poster"
        :alt="filmInfo.name"
        class="film-page__image"
    >
    <div class="film-page__description-box">
      <p class="film-page__content-title">Немного о сюжете:</p>
      <p class="film-page__content-text">{{ filmInfo.description || 'Нет информации' }}</p>
      <p class="film-page__content-title">Рейтинг:</p>
      <p class="film-page__content-text">{{ filmInfo.rating }}</p>
      <p class="film-page__content-title">Актерский состав:</p>
      <p
          v-if="filmActors.length === 0"
          class="film-page__content-text"
      >
        Нет информации
      </p>
      <ul v-else class="film-page__persons">
        <PersonFilm
            v-for="person in filmActors"
            :key="person.staffId"
            :person="person"
        />
      </ul>
      <p class="film-page__content-title">Режиссеры:</p>
      <p
          v-if="filmDirectors.length === 0"
          class="film-page__content-text"
      >
        Нет информации
      </p>
      <ul v-else class="film-page__persons">
        <PersonFilm
            v-for="person in filmDirectors"
            :key="person.staffId"
            :person="person"
        />
      </ul>
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
import PersonFilm from "@/components/PersonFilm";
import MyPreloader from "@/components/MyPreloader";

export default {
  components: {MyPreloader, PersonFilm},

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
  },

  computed: {
    ...mapState({
      isLoadingFilmInfo: state => state.loader.isLoadingFilmInfo,
      films: state => state.films.films,
      filmInfo: state => state.filmInfo,
      filmDirectors: state => state.filmInfo.directors,
    }),

    ...mapGetters({
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
  margin-bottom: 10px;
}

.film-page__content-text {
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

.film-page__persons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 10px;
}

.film-page__review-box {
  padding-top: 30px;
}
</style>