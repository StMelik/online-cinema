import {fetchFilms} from "@/utils/fetchFilms";

export default {
    namespaced: true,
    state() {
        return {
            films: [],
        }
    },
    getters: {

    },
    mutations: {
        SET_FILMS(state, payload) {
            state.films = payload
        },

    },
    actions: {
        async loadFilms({commit}, params) {
            try {
                commit('loader/SET_IS_LOADING_FILMS', true, {root: true})
                const films = await fetchFilms(params)
                commit('SET_FILMS', films.data.items)
                commit('pagination/SET_TOTAL_PAGE', films.data.totalPages, {root: true})
                commit('loader/SET_IS_LOADING_FILMS', false, {root: true})
                console.log('films', films.data)
                console.log('Фильмы загрузились')
            } catch (err) {
                console.log(err)
            }
        },
    },
}