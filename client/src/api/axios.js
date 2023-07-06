import axios from 'axios'

const API = "http://localhost:3000/api"
const API_PROD = 'https://tasks-app-express.onrender.com/api'

const instance = axios.create({
    baseURL: API_PROD,
    withCredentials: true
})

export default instance;