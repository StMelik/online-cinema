export default {
    namespaced: true,
    state() {
        return {
            filter: {
                ratingFrom: 0,
                ratingTo: 10,
                yearFrom: 1900,
                yearTo: new Date().getFullYear(),
            }
        }
    },
    mutations: {
        SET_FILMS_FILTER(state, payload) {
            state.filter = {
                ...state.filter,
                ...payload
            }
        },
    },
}