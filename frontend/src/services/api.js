import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.1.9.229:8000/api/'
})

export default api