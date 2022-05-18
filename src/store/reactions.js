import reactions from "@/utils/reactions";

const loadReactions = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(reactions)
        }, time)
    })
}

export default {
    namespaced: true,
    state() {
        return {
            reactions: []
        }
    },
    getters: {
    },
    mutations: {
        SET_REACTIONS(state, payload) {
            state.reactions = payload
        }
    },
    actions: {
        async loadReactions({commit}, payload) {
            try {
                const reactions = await loadReactions(payload)
                commit('SET_REACTIONS', reactions)
            } catch (err) {
                console.log(err)
            }
        }
    }
}