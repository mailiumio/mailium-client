import axios from 'axios'
import Cookies from 'js-cookie'

class API {
    constructor() {
        this.http = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
            headers: {
                common: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            },
        })
    }

    withToken(token) {
        this.http.defaults.headers.common['Authorization'] = `Bearer ${token}`

        return this
    }

    get(endpoint, params = {}) {
        return this.http.get(endpoint, { params })
    }

    post(endpoint, data = {}) {
        return this.http.post(endpoint, data)
    }

    patch(endpoint, data = {}) {
        return this.http.patch(endpoint, data)
    }

    delete(endpoint) {
        return this.http.delete(endpoint)
    }
}

export default new API()
