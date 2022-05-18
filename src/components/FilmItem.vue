<template>
  <li class="films-page__item item-films">
    <router-link
        :to="{name: 'film', params: {id: film.kinopoiskId}}"
        class="item-films__more"
    >
      Подробнее о фильме
    </router-link>
    <button
        class="item-films__favorite-button"
        @click="handleClickFavorite"
        :class="isFavoriteFilm && 'item-films__favorite-button_active'"
    ></button>
    <img class="item-films__image" :src="film.posterUrlPreview" :alt="film.nameRu">
    <div class="item-films__rating">{{ film.ratingKinopoisk }}</div>
    <p class="item-films__title">{{ film.nameRu }}</p>
  </li>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  props: {
    film: Object,
  },

  methods: {
    ...mapMutations({
      addFavoriteFilm: "favorite/ADD_FAVORITE_FILM",
      removeFavoriteFilm: "favorite/REMOVE_FAVORITE_FILM",
    }),

    handleClickFavorite() {
      if (!this.isFavoriteFilm) {
        this.addFavoriteFilm(this.film)
        localStorage.setItem('favoriteFilms', JSON.stringify(this.favoriteFilms))
      } else {
        this.removeFavoriteFilm(this.film)
        localStorage.setItem('favoriteFilms', JSON.stringify(this.favoriteFilms))
      }
    },
  },

  computed: {
    ...mapState({
      favoriteFilms: state => state.favorite.favoriteFilms
    }),

    isFavoriteFilm() {
      return Boolean(this.favoriteFilms.find(film => film.kinopoiskId === this.film.kinopoiskId))
    }
  },
}
</script>

<style scoped>
.item-films {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  max-height: 525px;
}

.item-films__more {
  position: absolute;
  display: flex;
  visibility: hidden;
  opacity: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.8);
  transition: all .3s;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  z-index: 5;
}

.item-films:hover .item-films__more {
  visibility: visible;
  opacity: 1;
}

.item-films__favorite-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 39px;
  height: 39px;
  z-index: 10;
  border: none;
  border-radius: 0 0 10px 0;
  background-color: rgba(255, 50, 50, 0.7);
  background-image: url('@/images/heart-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
  cursor: pointer;
}

.item-films__favorite-button_active {
  background-image: url('@/images/heart-active-icon.svg');
}

.item-films__image {
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.item-films__rating {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 50, 50, 0.7);
  padding: 10px 15px;
  border-radius: 0 0 0 10px;
}

.item-films__title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 80%);
  font-size: 20px;
}
</style>