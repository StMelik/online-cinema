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
            },

            sorted: null
        }
    },

    getters: {
        getFilmsFilter(state) {
            return {
                ...state.rating,
                ...state.year,
                order: state.sorted,
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

        SET_SORTED(state, payload) {
            state.sorted = payload
        },

        RESET_FILTER(state) {
            state.rating = {ratingFrom: null, ratingTo: null}
            state.year = {yearFrom: null, yearTo: null}
            state.sorted = null
        },
    },
}