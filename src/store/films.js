import films from "@/utils/films";

const loadFilms = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(films)
        }, time)
    })
}

export default {
    namespaced: true,
    state() {
        return {

        }
    },
    getters: {
        getFilms(state) {
            return state.films
        }
    },
    mutations: {
        SET_FILMS(state, payload) {
            state.films = payload
        }
    },
    actions: {
        async loadFilms({commit}, payload) {
            try {
                const films = await loadFilms(payload)
                commit('SET_IS_LOADING_FILMS', false, {root: true})
                commit('SET_FILMS', films)
            } catch(err) {
                console.log(err)
            }

        }
    }
}