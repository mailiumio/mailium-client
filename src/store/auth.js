import Cookies from 'js-cookie'
import API from '@/api'

const types = {
    SAVE_TOKEN: 'SAVE_TOKEN',
    GET_USER_ERROR: 'GET_USER_ERROR',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    LOGOUT: 'LOGOUT'
}

export default {
    namespaced: true,
    state: {
        user: null,
        token: Cookies.get('token')
    },
    getters: {
        authenticated: state => state.user !== null,
        token: state => state.token,
        user: state => state.user
    },
    mutations: {
        [types.SAVE_TOKEN](state, token) {
            state.token = token

            Cookies.set('token', token, { expires: 30 })
        },
        [types.GET_USER_ERROR](state) {
            state.token = null
            Cookies.remove('token')
        },
        [types.GET_USER_SUCCESS](state, user) {
            state.user = user
        },
        [types.LOGOUT](state) {
            state.user = null
            state.token = null

            Cookies.remove('token')
        }
    },
    actions: {
        saveToken({ commit }, token) {
            commit(types.SAVE_TOKEN, token)
        },

        async getUser({ commit }, token) {
            try {
                const { data: { user } = {} } = await API.withToken(token).get(
                    '/user'
                )

                commit(types.GET_USER_SUCCESS, user)
            } catch (error) {
                commit(types.GET_USER_ERROR)
            }
        },

        async logout({ commit }) {
            try {
                await API.post('/logout')
            } catch (error) {
                console.log(error)
            }

            commit(types.LOGOUT)
        }
    }
}
