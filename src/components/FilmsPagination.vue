<template>
  <ul class="films-pagination">
    <li
        class="films-pagination__item"
        v-for="p in totalPages"
        :key="p"
        :class="p == page && 'films-pagination__item_active'"
        @click="handleClickPage(p)"
    >
      {{p}}
    </li>
  </ul>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";


export default {

  methods: {
    ...mapMutations({
      setPage: "pagination/SET_PAGE"
    }),

    ...mapActions({
      loadFilms: 'films/loadFilms',
    }),

    handleClickPage(page) {
      this.setPage(page);
      this.loadFilms({
        page: this.page,
        ...this.filmsFilter
      })
    }
  },
  computed: {
    ...mapState({
      // films: state => state.films.films,
      filmsFilter: state => state.filmsFilter.filter,
      page: state => state.pagination.page,
      totalPages: state => state.pagination.totalPages
    }),
  },
}
</script>

<style scoped>
.films-pagination {
  display: flex;
  column-gap: 10px;
  padding: 20px 0;
  justify-content: center;
}

.films-pagination__item {
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  transition: all .3s;
}

.films-pagination__item:hover:not(.films-pagination__item_active) {
  color: #111111;
  background-color: #eeeeee;
}

.films-pagination__item_active {
  border: 1px solid #d74f16;
  color: #d74f16;
}
</style>