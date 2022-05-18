import {createStore} from 'vuex'
import films from '@/store/films'

const store = createStore({
    state() {
        return {
            isLoadingFilms: true,
            isLoadingFilmInfo: true,
            page: 1,
            totalPages: null,
            favoriteFilms: [],
            isFavoriteFilm: false,
        }
    },
    getters: {
    },
    mutations: {
        SET_IS_LOADING_FILMS(state, payload) {
            state.isLoadingFilms = payload
        },

        SET_IS_LOADING_FILM_INFO(state, payload) {
            state.isLoadingFilmInfo = payload
        },

        SET_PAGE(state, payload) {
            state.page = payload
        },

        SET_TOTAL_PAGE(state, payload) {
            state.totalPages = payload
        },

        ADD_FAVORITE_FILM(state, payload) {
            state.favoriteFilms.push(payload)
        },

        REMOVE_FAVORITE_FILM(state, payload) {
            state.favoriteFilms = [...state.favoriteFilms.filter(film => film !== payload)]
        },

        SET_IS_FAVORITE_FILM(state, payload) {
            state.isFavoriteFilm = payload
        },
    },
    actions: {

    },
    modules: {
        films
    }
})

export default store