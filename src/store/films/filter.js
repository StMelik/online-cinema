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

            sorted: null,
            keyword: null,
        }
    },

    getters: {
        getFilmsFilter(state) {
            return {
                ...state.rating,
                ...state.year,
                order: state.sorted,
                keyword: state.keyword,
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

        SET_KEYWORD(state, payload) {
            state.keyword = payload
        },

        RESET_FILTER(state) {
            state.rating = {ratingFrom: null, ratingTo: null}
            state.year = {yearFrom: null, yearTo: null}
            state.sorted = null
            state.keyword = null
        },
    },
}