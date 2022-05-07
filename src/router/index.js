
import AllFilmPage from "@/pages/AllFilmPage";
import MainPage from "@/components/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import FilmPage from "@/pages/FilmPage";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/films',
        name: 'films',
        component: AllFilmPage
    },
    {
        path: '/films/:id',
        name: 'film',
        component: FilmPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router