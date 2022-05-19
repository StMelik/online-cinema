import {fetchDataFilm, fetchStaffFilm} from "@/utils/fetchFilms";

export default {
    namespaced: true,
    state() {
        return {
            name: '',
            year: '',
            description: '',
            rating: 0,
            image: null,
            webUrl: '',
            directors: [],
            actors: []
        }
    },
    getters: {
        getFilmActors(state) {
            return state.actors
                .slice(0, 8)
        }
    },
    mutations: {
        SET_FILM_INFO(state, filmInfo) {
            state.name = filmInfo.nameRu
            state.year = filmInfo.year
            state.description = filmInfo.description
            state.rating = filmInfo.ratingKinopoisk
            state.image = filmInfo.coverUrl
            state.poster = filmInfo.posterUrlPreview
            state.webUrl = filmInfo.webUrl
        },

        SET_FILM_STAFF(state, filmStaff) {
            state.directors = filmStaff.filter(item => item.professionKey === "DIRECTOR")
            state.actors = filmStaff.filter(item => item.professionKey === "ACTOR")
        },

        REMOVE_FILM_STAFF(state) {
            state.directors = []
            state.actors = []
        },
    },
    actions: {
        async loadFilmInfo({commit}, filmId) {
            try {
                commit('loader/SET_IS_LOADING_FILM_INFO', true, {root: true})
                commit('REMOVE_FILM_STAFF')
                const filmInfo = await fetchDataFilm(filmId)
                commit('SET_FILM_INFO', filmInfo.data)
                const filmStaff = await fetchStaffFilm(filmId)
                commit('SET_FILM_STAFF', filmStaff.data)
            } catch (err) {
                console.log(err)
            } finally {
                commit('loader/SET_IS_LOADING_FILM_INFO', false, {root: true})
            }
        },

        // async loadFilmImage({commit}, filmId) {
        //     try {
        //         const filmImages = await fetchImageFilm(filmId)
        //         // commit('SET_FILMS', films.data.items)
        //         // commit('SET_IS_LOADING_FILMS', false, {root: true})
        //         console.log('filmImages', filmImages.data)
        //         console.log('Картинки фильма загрузились')
        //     } catch (err) {
        //         console.log(err)
        //     }
        // },


    },
}