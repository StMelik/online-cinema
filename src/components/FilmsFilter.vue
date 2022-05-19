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
          @input="setRatingFilter({ratingFrom: +$event.target.value})"
      >
      <input
          class="filter-films__input"
          type="number"
          min="0"
          max="10"
          placeholder="До"
          :value="filmsFilter.ratingTo"
          @input="setRatingFilter({ratingTo: +$event.target.value})"
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
          @input="setYearFilter({yearFrom: +$event.target.value})"
      >
      <input
          class="filter-films__input"
          type="number"
          min="1850"
          max="2050"
          placeholder="До"
          :value="filmsFilter.yearTo"
          @input="setYearFilter({yearTo: +$event.target.value})"
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
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";


export default {

  methods: {
    ...mapMutations({
      setRatingFilter: "filmsFilter/SET_RATING",
      setYearFilter: "filmsFilter/SET_YEAR",
      setPage: "pagination/SET_PAGE"
    }),

    ...mapActions({
      loadFilms: 'films/loadFilms',
    }),

    handleSubmitFilterForm() {
      this.setPage(1)
      this.loadFilms({
        page: this.page,
        filter: this.filmsFilter,
      })
    },

    handleResetFilterForm() {
      this.setPage(1)
      this.setRatingFilter({ratingFrom: null, ratingTo: null})
      this.setYearFilter({yearFrom: null, yearTo: null})
      this.loadFilms({page: this.page})
    }
  },
  computed: {
    ...mapState({
      page: state => state.pagination.page
    }),

    ...mapGetters({
      filmsFilter: "filmsFilter/getFilmsFilter",
    })
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