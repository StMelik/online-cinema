<template>
  <div class="container">
    <div class="film-page" :style="isEmpty && {height: 'calc(100vh - 90px)'}">
      <h2 class="film-page__title">{{film.title}}</h2>
      <img :src="film.imageUrl" :alt="film.title" :style="isEmpty && {height: 'calc(100% - 90px)'}" class="film-page__image">
      <p v-if="!isEmpty" class="film-page__content-title">Немного о сюжете:</p>
      <p v-if="!isEmpty" class="film-page__content-text">{{film.plot}}</p>
      <p v-if="!isEmpty" class="film-page__content-title">Рейтинг:</p>
      <p v-if="!isEmpty" class="film-page__content-text">{{film.rating}}</p>
      <p v-if="!isEmpty" class="film-page__content-title">Актерский состав:</p>
      <p v-if="!isEmpty" class="film-page__content-text">{{film.actors}}</p>
      <p v-if="!isEmpty" class="film-page__content-title">Режиссеры:</p>
      <p v-if="!isEmpty" class="film-page__content-text">{{film.directors}}</p>
    </div>
  </div>
</template>

<script>
import films from "@/utils/films";

export default {
  data() {
    return {
      film: null,
      isEmpty: false
    }
  },
  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.isEmpty = false
      this.film = film
    } else {
      this.isEmpty = true
      this.film = {
        imageUrl: 'https://w-dog.ru/wallpapers/14/2/511224256308748/art-kino-katushka-kinoplenka-xlopushka-popkorn-abstrakciya-3d-oboi.jpg',
        title: 'Такого фильма еще нет',
      }
    }
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

.film-page__title::after {
  content: '';
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #e15353 0%, #e1535300 80%);
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
</style>