<template>
  <li class="films-page__item item-films">
    <router-link
        :to="{name: 'film', params: {id: film.kinopoiskId}}"
        class="item-films__more"
    >
      Подробнее о фильме
    </router-link>
    <img class="item-films__image" :src="film.posterUrlPreview" :alt="film.nameRu">
    <div class="item-films__rating">{{ film.ratingKinopoisk }}</div>
    <p class="item-films__title">{{ film.nameRu }}</p>
  </li>
</template>

<script>
export default {
  props: {
    film: Object,
  },

  mounted() {

  }
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