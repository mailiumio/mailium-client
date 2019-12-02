import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import feedback from '@/store/feedback'
import lists from '@/store/lists'
import teams from '@/store/teams'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        feedback,
        lists,
        teams,
    },
})
