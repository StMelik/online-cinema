export default {
    namespaced: true,
    state() {
        return {
            isAuth: false,
        }
    },
    mutations: {
        SET_IS_AUTH(state, payload) {
            state.isAuth = payload
        }
    },
}