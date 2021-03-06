import {createRouter, createWebHistory} from "vue-router";
import AllFilmPage from "@/pages/AllFilmPage";
import MainPage from "@/components/MainPage";
import FilmPage from "@/pages/FilmPage";
import NotFound from "@/pages/NotFound";
import FilmsLayout from "@/pages/FilmsLayout";
import FavoriteFilmsPage from "@/pages/FavoriteFilmsPage";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/films',
        name: 'filmsLayout',
        component: FilmsLayout,
        children: [
            {
                path: '',
                name: 'films',
                component: AllFilmPage
            },
            {
                path: ':id',
                name: 'film',
                component: FilmPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('auth')) {
                        next()
                    } else {
                        next({name: 'films'})
                    }
                },
            },
            {
                path: '/:catchAll(.*/*)',
                redirect: {name: 'films'}
            },
        ]
    },
    {
        path: '/serials',
        name: 'serials',
        component: NotFound
    },
    {
        path: '/favorites',
        name: 'favoritesLayout',
        component: FilmsLayout,
        children: [
            {
                path: '',
                name: 'favorites',
                component: FavoriteFilmsPage
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router