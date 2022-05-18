export default {
    namespaced: true,
    state() {
        return {
            page: 1,
            totalPages: null,
        }
    },
    mutations: {
        SET_PAGE(state, payload) {
            state.page = payload
        },

        SET_TOTAL_PAGE(state, payload) {
            state.totalPages = payload
        },
    },
}