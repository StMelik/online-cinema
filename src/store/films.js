import {fetchDataFilm, fetchFilms, fetchStaffFilm} from "@/utils/fetchFilms";

export default {
    namespaced: true,
    state() {
        return {
            films: [],
            filmInfo: {
                name: '',
                description: '',
                rating: 0,
                image: null,
                directors: [],
                actors: []
            },

        }
    },
    getters: {
        getFilmDirectors(state) {
            return state.filmInfo.directors
                .map(director => {
                    if (director.nameRu) {
                        return director.nameRu
                    } else if (director.nameEn) {
                        return director.nameEn
                    } else {
                        return "Нет информации"
                    }
                })
                .join(', ')
        },

        getFilmActors(state) {
            return state.filmInfo.actors
                .slice(0, 10)
                .map(actor => actor.nameRu)
                .join(', ') + ' и другие'
        }
    },
    mutations: {
        SET_FILMS(state, payload) {
            state.films = payload
        },

        SET_FILM_INFO(state, filmInfo) {
            state.filmInfo.name = filmInfo.nameRu
            state.filmInfo.description = filmInfo.description
            state.filmInfo.rating = filmInfo.ratingKinopoisk
            state.filmInfo.image = filmInfo.coverUrl
        },

        SET_FILM_STAFF(state, filmStaff) {
            state.filmInfo.directors = filmStaff.filter(item => item.professionKey === "DIRECTOR")
            state.filmInfo.actors = filmStaff.filter(item => item.professionKey === "ACTOR")
        }
    },
    actions: {
        async loadFilms({commit}, page) {
            try {
                const films = await fetchFilms(page)
                commit('SET_FILMS', films.data.items)
                commit('SET_IS_LOADING_FILMS', false, {root: true})
                console.log('films', films.data)
                console.log('Фильмы загрузились')
            } catch (err) {
                console.log(err)
            }
        },

        async loadFilmInfo({commit}, filmId) {
            try {
                commit('SET_IS_LOADING_FILM_INFO', true, {root: true})
                const filmInfo = await fetchDataFilm(filmId)
                commit('SET_FILM_INFO', filmInfo.data)
                // commit('SET_IS_LOADING_FILMS', false, {root: true})
                console.log('filmInfo', filmInfo.data)
                console.log('Информация о фильме загрузилась')
            } catch (err) {
                console.log(err)
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

        async loadFilmStaff({commit}, filmId) {
            try {
                const filmStaff = await fetchStaffFilm(filmId)
                // commit('SET_IS_LOADING_FILM_INFO', false, {root: true})
                commit('SET_FILM_STAFF', filmStaff.data)
                console.log('filmStaff', filmStaff.data)
                console.log('Персонал фильма загрузился')
            } catch (err) {
                console.log(err)
            }
        }
    }
}