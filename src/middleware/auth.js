import Cookies from 'js-cookie'

export default function auth({ next, router }) {
    if (!Cookies.get('token')) {
        return router.push('/login')
    }

    return next()
}
