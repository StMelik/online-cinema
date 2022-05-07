<template>
  <div class="container">
    <div class="film-page">
      <h2 class="film-page__title">{{film.title}}</h2>
      <img :src="film.imageUrl" :alt="film.title" class="film-page__image">
      <p class="film-page__content-title">Немного о сюжете:</p>
      <p class="film-page__content-text">{{film.plot}}</p>
      <p class="film-page__content-title">Рейтинг:</p>
      <p class="film-page__content-text">{{film.rating}}</p>
      <p class="film-page__content-title">Актерский состав:</p>
      <p class="film-page__content-text">{{film.actors}}</p>
      <p class="film-page__content-title">Режисеры:</p>
      <p class="film-page__content-text">{{film.directors}}</p>
    </div>
  </div>
</template>

<script>
import films from "@/utils/films";

export default {
  data() {
    return {
      film: null,
    }
  },
  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
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