import API from '@/api'

const types = {
    GET_LISTS_SUCCESS: 'GET_LISTS_SUCCESS'
}

export default {
    namespaced: true,
    state: {
        entities: {},
        loading: true
    },
    getters: {
        entities: state => Object.values(state.entities),
        loading: state => state.loading
    },
    mutations: {
        [types.GET_LISTS_SUCCESS](state, lists) {
            state.entities = Object.fromEntries(
                lists.map(list => [list.id, list])
            )
            state.loading = false
        }
    },
    actions: {
        async getListsFromTeam({ commit }, id) {
            try {
                const { data: { data: lists = {} } = {} } = await API.get(
                    `/teams/${id}/lists`
                )

                commit(types.GET_LISTS_SUCCESS, lists)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
