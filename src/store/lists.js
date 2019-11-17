import API from '@/api'
import router from '@/router'

const types = {
    GET_LISTS_SUCCESS: 'GET_LISTS_SUCCESS',
    SET_LOADING: 'SET_LOADING',
    SET_ERRORS: 'SET_ERRORS',
    ADD_LIST: 'ADD_LIST'
}

export default {
    namespaced: true,
    state: {
        entities: {},
        loading: false,
        errors: {}
    },
    getters: {
        entities: state => Object.values(state.entities),
        loading: state => state.loading,
        errors: state => state.errors
    },
    mutations: {
        [types.GET_LISTS_SUCCESS](state, lists) {
            state.entities = Object.fromEntries(
                lists.map(list => [list.id, list])
            )
        },
        [types.SET_LOADING](state, loading) {
            state.loading = loading
        },
        [types.SET_ERRORS](state, errors) {
            state.errors = errors
        },
        [types.ADD_LIST](state, list = {}) {
            state.entities = {
                ...state.entities,
                [list.id]: list
            }
        }
    },
    actions: {
        async getListsFromTeam({ commit }, id) {
            commit(types.SET_LOADING, true)

            try {
                const { data: { data: lists = {} } = {} } = await API.get(
                    `/teams/${id}/lists`
                )

                commit(types.GET_LISTS_SUCCESS, lists)
                commit(types.SET_LOADING, false)
            } catch (error) {
                commit(types.SET_LOADING, false)
                console.log(error)
            }
        },

        async createList({ commit, rootGetters }, data) {
            commit(types.SET_LOADING, true)
            commit(types.SET_ERRORS, {})

            try {
                const response = await API.post('/lists', {
                    ...data,
                    team_id: rootGetters['teams/team']?.id
                })

                const team = response?.data?.data

                commit(types.ADD_LIST, team)
                commit(types.SET_LOADING, false)

                router.push(`/lists/${team.id}`)
            } catch (error) {
                commit(types.SET_LOADING, false)

                commit(types.SET_ERRORS, error.response?.data?.errors)
            }
        }
    }
}
