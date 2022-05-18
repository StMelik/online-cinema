import {createStore} from 'vuex'
import reactions from '@/store/reactions'
import films from '@/store/films'

const store = createStore({
    state() {
        return {
            isLoadingFilms: true,
            isLoadingFilmInfo: true,
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
    },
    actions: {

    },
    modules: {
        reactions,
        films
    }
})

export default store