export default {
    namespaced: true,
    state() {
        return {
            isLoadingFilms: true,
            isLoadingFilmInfo: true,
        }
    },
    mutations: {
        SET_IS_LOADING_FILMS(state, payload) {
            state.isLoadingFilms = payload
        },

        SET_IS_LOADING_FILM_INFO(state, payload) {
            state.isLoadingFilmInfo = payload
        },
    },
}