<template>
  <div class="favorite-films">
    <h2
        v-if="favoriteFilms.length === 0"
        class="favorite-films__empty"
    >
      Вы ещё ничего не добавили в избранное
    </h2>
    <ul
        v-else
        class="favorite-films__list"
    >
      <FilmItem
          v-for="film in favoriteFilms"
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
  computed: {
    ...mapState({
      favoriteFilms: state => state.favorite.favoriteFilms
    })
  }
}
</script>

<style scoped>
.favorite-films {
  padding: 30px 0;
}

.favorite-films__empty {
  text-align: center;
  margin-top: 50px;
}

.favorite-films__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
</style>