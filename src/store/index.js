import {createStore} from 'vuex'
import films from '@/store/films/films'
import filter from "@/store/films/filter";
import filmInfo from "@/store/films/filmInfo";
import favorite from "@/store/favorite";
import pagination from "@/store/pagination";
import loader from "@/store/loader";
import auth from "@/store/auth";

const store = createStore({
    state() {
        return {}
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        films,
        favorite,
        pagination,
        loader,
        filmsFilter: filter,
        filmInfo,
    }
})

export default store