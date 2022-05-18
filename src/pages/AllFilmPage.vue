<template>
  <div class="films-page">
    <FilmsFilter/>
    <h2 class="films-page__title">Выбери фильм на свой вкус</h2>
    <ul class="films-page__list">
      <FilmItem
          v-for="film in films"
          :key="film.kinopoiskId"
          :film="film"
      />
    </ul>
    <FilmsPagination/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import FilmItem from "@/components/FilmItem";
import FilmsFilter from "@/components/FilmsFilter";
import FilmsPagination from "@/components/FilmsPagination";

export default {
  components: {FilmsPagination, FilmsFilter, FilmItem},

  computed: {
    ...mapState({
      films: state => state.films.films,
    }),
  },
}
</script>

<style scoped>
.films-page {
  padding: 30px 0;
}

.films-page__title {
  margin-bottom: 30px;
  font-size: 32px;
}

.films-page__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
</style>