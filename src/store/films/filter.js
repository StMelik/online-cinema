export default {
    namespaced: true,
    state() {
        return {
            rating: {
                ratingFrom: null,
                ratingTo: null
            },

            year: {
                yearFrom: null,
                yearTo: null
            }
        }
    },

    getters: {
      getFilmsFilter(state) {
          return {
              ...state.rating,
              ...state.year,
          }
      }
    },

    mutations: {
        SET_RATING(state, payload) {
            state.rating = {
                ...state.rating,
                ...payload
            }
        },

        SET_YEAR(state, payload) {
            state.year = {
                ...state.year,
                ...payload
            }
        },
    },
}