import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import teams from '@/store/teams'
import lists from '@/store/lists'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        teams,
        lists
    }
})
