import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'

import AuthSuccess from '@/pages/auth/AuthSuccess'
import Login from '@/pages/auth/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'auth.login',
            component: Login
        },
        {
            path: '/auth/callback',
            name: 'auth.success',
            component: AuthSuccess
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
