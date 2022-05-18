import axios from "axios";
import configApi from "@/utils/configApi";

export function fetchFilms(params) {
    return axios.get("/api/v2.2/films", {
        ...configApi,
        params: {
            type: 'FILM',
            ...params
        }
    })
}

export function fetchDataFilm(filmId) {
    return axios.get(`/api/v2.2/films/${filmId}`, configApi)
}

export function fetchImageFilm(filmId) {
    return axios.get(`/api/v2.2/films/${filmId}/images`, configApi)
}

export function fetchStaffFilm(filmId) {
    return axios.get(`/api/v1/staff`, {
        ...configApi,
        params: {
            filmId
        }
    })
}