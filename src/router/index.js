
import AllFilmPage from "@/pages/AllFilmPage";
import MainPage from "@/components/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import FilmPage from "@/pages/FilmPage";
import NotFound from "@/pages/NotFound";


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
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router