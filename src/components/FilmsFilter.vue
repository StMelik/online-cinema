<template>
  <form class="films-page__filter filter-films" @submit.prevent="handleSubmitFilterForm">
    <label class="filter-films__group">
      Рейтинг
      <input
          class="filter-films__input"
          type="number"
          min="0"
          max="10"
          placeholder="От"
          :value="filmsFilter.ratingFrom"
          @input="setFilmsFilter({ratingFrom: +$event.target.value})"
      >
      <input
          class="filter-films__input"
          type="number"
          min="0"
          max="10"
          placeholder="До"
          :value="filmsFilter.ratingTo"
          @input="setFilmsFilter({ratingTo: +$event.target.value})"
      >
    </label>
    <label class="filter-films__group">
      Год
      <input
          class="filter-films__input"
          type="number"
          min="1850"
          max="2050"
          placeholder="От"
          :value="filmsFilter.yearFrom"
          @input="setFilmsFilter({yearFrom: +$event.target.value})"
      >
      <input
          class="filter-films__input"
          type="number"
          min="1850"
          max="2050"
          placeholder="До"
          :value="filmsFilter.yearTo"
          @input="setFilmsFilter({yearTo: +$event.target.value})"
      >
    </label>
    <div class="filter-films__buttons">
      <button
          class="button filter-films__reset"
          @click="handleResetFilterForm"
          type="button"
      >
        Сбросить
      </button>
      <button
          class="button filter-films__submit"
          type="submit"
      >
        Поиск
      </button>
    </div>
  </form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";


export default {

  methods: {
    ...mapMutations({
      setFilmsFilter: "filmsFilter/SET_FILMS_FILTER",
      setPage: "pagination/SET_PAGE"
    }),

    ...mapActions({
      loadFilms: 'films/loadFilms',
    }),

    handleSubmitFilterForm() {
      this.setPage(1)
      this.loadFilms({
        page: this.page,
        ...this.filmsFilter
      })
    },

    handleResetFilterForm() {
      this.setPage(1)
      this.setFilmsFilter({
        ratingFrom: 0,
        ratingTo: 10,
        yearFrom: 1850,
        yearTo: new Date().getFullYear(),
      })
      this.loadFilms({
        page: this.page,
        ...this.filmsFilter
      })
    }
  },
  computed: {
    ...mapState({
      filmsFilter: state => state.filmsFilter.filter,
      page: state => state.pagination.page
    }),
  },
}
</script>

<style scoped>
.filter-films {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.filter-films::after {
  content: '';
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #e15353 0%, #e1535300 80%);
}

.filter-films__group {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.filter-films__input {
  width: 70px;
  padding: 5px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  color: #eeeeee;
  background-color: transparent;
  align-items: center;
}

.filter-films__buttons {
  margin-left: auto;
  display: flex;
  column-gap: 20px;
}

</style>