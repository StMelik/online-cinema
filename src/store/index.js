import {createStore} from 'vuex'
import reactionsModule from '@/store/reactions'
import filmsModule from '@/store/films'

const store = createStore({
    state() {
        return {
            count: 5,
            isLoadingFilms: true
        }
    },
    getters: {
        getIsLoadingFilms(state) {
            return state.isLoadingFilms
        }
    },
    mutations: {
        SET_IS_LOADING_FILMS(state, payload) {
            state.isLoadingFilms = payload
        }
    },
    actions: {

    },
    modules: {
        reactions: reactionsModule,
        films: filmsModule
    }
})

export default store