import Vue from 'vue'

import API from '@/api'
import router from '@/router'

const types = {
    SET_LOADING: 'SET_LOADING',
    SET_ERRORS: 'SET_ERRORS',
    SET_PAGINATION: 'SET_PAGINATION',
    GET_LISTS: 'GET_LISTS',
    ADD_LIST: 'ADD_LIST',
    UPDATE_LIST: 'UPDATE_LIST',
    DELETE_LIST: 'DELETE_LIST',
}

export default {
    namespaced: true,
    state: {
        entities: {},
        loading: true,
        errors: {},
        pagination: {
            current: 1,
            last: 1,
        },
    },
    getters: {
        entities: state => Object.values(state.entities),
        entity: state => id => state.entities[id],
        loading: state => state.loading,
        errors: state => state.errors,
        pagination: state => state.pagination,
    },
    mutations: {
        [types.GET_LISTS](state, lists) {
            state.entities = Object.fromEntries(
                lists.map(list => [
                    list.id,
                    {
                        ...list,
                        link: `/lists/${list.id}`,
                    },
                ])
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
                [list.id]: {
                    ...list,
                    link: `/lists/${list.id}`,
                },
            }
        },
        [types.SET_PAGINATION](state, pagination = {}) {
            state.pagination = { ...state.pagination, ...pagination }
        },
        [types.UPDATE_LIST](state, list = {}) {
            state.entities = {
                ...state.entities,
                [list.id]: {
                    ...list,
                    link: `/lists/${list.id}`,
                },
            }
        },
        [types.DELETE_LIST](state, id) {
            Vue.delete(state.entities, id)
        },
    },
    actions: {
        async getListsFromTeam({ commit }, id) {
            commit(types.SET_LOADING, true)

            try {
                const {
                    data: { data: lists = {}, meta = {} } = {},
                } = await API.get(`/teams/${id}/lists`, {
                    page: router.currentRoute.query?.page
                        ? router.currentRoute.query?.page
                        : 1,
                })

                commit(types.GET_LISTS, lists)
                commit(types.SET_PAGINATION, {
                    current: meta.current_page,
                    last: meta.last_page,
                })
                commit(types.SET_LOADING, false)
            } catch (error) {
                commit(types.SET_LOADING, false)
            }
        },

        async createList({ commit, dispatch, rootGetters }, data) {
            commit(types.SET_LOADING, true)
            commit(types.SET_ERRORS, {})

            try {
                const response = await API.post('/lists', {
                    ...data,
                    team_id: rootGetters['teams/team']?.id,
                })

                const list = response?.data?.data

                commit(types.ADD_LIST, list)
                commit(types.SET_LOADING, false)

                router.push(`/lists/${list.id}`)

                dispatch(
                    'feedback/addMessage',
                    { text: 'List created' },
                    { root: true }
                )
            } catch (error) {
                commit(types.SET_LOADING, false)

                commit(types.SET_ERRORS, error.response?.data?.errors)
            }
        },

        async getList({ commit }, id) {
            commit(types.SET_LOADING, true)

            try {
                const response = await API.get(`/lists/${id}`)

                commit(types.ADD_LIST, response?.data?.data)
                commit(types.SET_LOADING, false)
            } catch (error) {
                commit(types.SET_LOADING, false)

                commit(types.SET_ERRORS, error.response?.data?.errors)
            }
        },

        async updateList({ commit, dispatch }, list) {
            commit(types.SET_LOADING, true)

            try {
                const response = await API.patch(`/lists/${list.id}`, list)

                commit(types.SET_LOADING, false)

                commit(types.UPDATE_LIST, response?.data?.data)

                dispatch(
                    'feedback/addMessage',
                    { text: 'List updated' },
                    { root: true }
                )
            } catch (error) {
                commit(types.SET_LOADING, false)

                commit(types.SET_ERRORS, error.response?.data?.errors)
                dispatch(
                    'feedback/addMessage',
                    { text: 'An error occured' },
                    { root: true }
                )
            }
        },

        async deleteList({ commit, dispatch }, id) {
            commit(types.SET_LOADING, true)

            try {
                await API.delete(`/lists/${id}`)

                commit(types.SET_LOADING, false)

                commit(types.DELETE_LIST, id)

                router.push(`/lists`)

                dispatch(
                    'feedback/addMessage',
                    { text: 'List deleted' },
                    { root: true }
                )
            } catch (error) {
                commit(types.SET_LOADING, false)

                dispatch(
                    'feedback/addMessage',
                    { text: 'An error occured' },
                    { root: true }
                )
            }
        },

        setLoading({ commit }, loading) {
            commit(types.SET_LOADING, loading)
        },
    },
}
