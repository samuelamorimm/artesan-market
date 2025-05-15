import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.19.8.4:8000/api/'
})

export default api