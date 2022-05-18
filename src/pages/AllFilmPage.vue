<template>
  <div class="films-page">
    <h2 class="films-page__title">Выбери фильм на свой вкус</h2>
    <ul class="films-page__list">
      <FilmItem
        v-for="film in films"
        :key="film.kinopoiskId"
        :film="film"
      />
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import FilmItem from "@/components/FilmItem";

export default {
  components: {FilmItem},
  methods: {

  },
  computed: {
    ...mapState({
      films: state => state.films.films
    }),
  },

  created() {

  }
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