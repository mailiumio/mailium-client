import Vue from 'vue'
import uuid from 'uuid'

const types = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    REMOVE_MESSAGE: 'REMOVE_MESSAGE',
}

export default {
    namespaced: true,
    state: {
        entities: {},
    },
    getters: {
        entities: state => Object.values(state.entities),
    },
    mutations: {
        [types.ADD_MESSAGE](state, message) {
            state.entities = {
                ...state.entities,
                [message.id]: message,
            }
        },
        [types.REMOVE_MESSAGE](state, id) {
            Vue.delete(state.entities, id)
        },
    },
    actions: {
        removeMessage({ commit }, id) {
            commit(types.REMOVE_MESSAGE, id)
        },

        addMessage({ commit }, { text, duration = 3000 }) {
            commit(types.ADD_MESSAGE, {
                id: uuid(),
                text,
                duration,
            })
        },
    },
}
