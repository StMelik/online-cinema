export default {
    namespaced: true,
    state() {
        return {
            favoriteFilms: [],
        }
    },
    mutations: {
        ADD_FAVORITE_FILM(state, payload) {
            state.favoriteFilms.push(payload)
        },

        REMOVE_FAVORITE_FILM(state, payload) {
            state.favoriteFilms = [...state.favoriteFilms.filter(film => film !== payload)]
        },
    },
}