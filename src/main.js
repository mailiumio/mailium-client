import Vue from 'vue'
import Icon from 'vue-zondicons'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.component('Icon', Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
