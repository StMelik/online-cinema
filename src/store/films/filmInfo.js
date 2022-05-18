import {fetchDataFilm, fetchStaffFilm} from "@/utils/fetchFilms";

export default {
    namespaced: true,
    state() {
        return {
            name: '',
            description: '',
            rating: 0,
            image: null,
            webUrl: '',
            directors: [],
            actors: []
        }
    },
    getters: {
        getFilmDirectors(state) {
            return state.directors
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
            return state.actors
                .slice(0, 10)
                .map(actor => actor.nameRu)
                .join(', ') + ' и другие'
        }
    },
    mutations: {
        SET_FILM_INFO(state, filmInfo) {
            state.name = filmInfo.nameRu
            state.description = filmInfo.description
            state.rating = filmInfo.ratingKinopoisk
            state.image = filmInfo.coverUrl
            state.webUrl = filmInfo.webUrl
        },

        SET_FILM_STAFF(state, filmStaff) {
            state.directors = filmStaff.filter(item => item.professionKey === "DIRECTOR")
            state.actors = filmStaff.filter(item => item.professionKey === "ACTOR")
        },
    },
    actions: {
        async loadFilmInfo({commit}, filmId) {
            try {
                commit('loader/SET_IS_LOADING_FILM_INFO', true, {root: true})
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
    },
}