import axios from 'axios'
import Cookies from 'js-cookie'

class API {
    constructor() {
        this.http = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
            headers: {
                common: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            }
        })
    }

    withToken(token) {
        this.http.defaults.headers.common['Authorization'] = `Bearer ${token}`

        return this
    }

    get(endpoint) {
        return this.http.get(endpoint)
    }
}

export default new API()
