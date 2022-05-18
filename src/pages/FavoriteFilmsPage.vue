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

    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      favoriteFilms: state => state.favoriteFilms
    })
  }
}
</script>

<style scoped>
.favorite-films {

}

.favorite-films__empty {
  text-align: center;
  margin-top: 50px;
}
</style>