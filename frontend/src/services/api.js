import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.19.14.5:8000/api/'
})

export default api