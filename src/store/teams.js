import API from '@/api'

const types = {
    GET_TEAMS: 'GET_TEAMS',
    SET_CURRENT_TEAM: 'SET_CURRENT_TEAM',
}

export default {
    namespaced: true,
    state: {
        entities: {},
        current: {
            id: null,
            action: 'loading',
        },
    },
    getters: {
        team: state =>
            state.current.id ? state.entities[state.current.id] : null,
    },
    mutations: {
        [types.GET_TEAMS](state, teams) {
            state.entities = Object.fromEntries(
                teams.map(team => [team.id, team])
            )
        },
        [types.SET_CURRENT_TEAM](state, team) {
            state.current.id = team.id
        },
    },
    actions: {
        async getTeams({ commit, state }) {
            try {
                const { data: { data: teams = {} } = {} } = await API.get(
                    '/teams'
                )

                commit(types.GET_TEAMS, teams)

                if (!state.current.id) {
                    commit(types.SET_CURRENT_TEAM, teams[0])
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
}
