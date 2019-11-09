import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Lists from '@/pages/Lists'

import AuthSuccess from '@/pages/auth/AuthSuccess'
import Login from '@/pages/auth/Login'
import Logout from '@/pages/auth/Logout'

import auth from '@/middleware/auth'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'auth.login',
            component: Login
        },
        {
            path: '/logout',
            name: 'auth.logout',
            component: Logout
        },
        {
            path: '/auth/callback',
            name: 'auth.success',
            component: AuthSuccess
        },
        {
            path: '/lists',
            name: 'lists',
            component: Lists,
            meta: {
                middleware: auth
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

const nextFactory = (context, middleware, index) => {
    const subsequentMiddleware = middleware[index]
    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = {
            from,
            next,
            router,
            to
        }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next()
})

export default router
