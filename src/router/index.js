
import AllFilmPage from "@/pages/AllFilmPage";
import MainPage from "@/components/MainPage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/films',
        component: AllFilmPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router