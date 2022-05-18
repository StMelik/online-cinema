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
            state.favoriteFilms = [...state.favoriteFilms.filter(film => film.kinopoiskId !== payload.kinopoiskId)]
        },

        LOAD_FAVORITE_FILMS(state, payload) {
            state.favoriteFilms = payload
        }
    },
}