import axios from 'axios'

const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: '/api/'
})

// axiosConfig.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer`
// })

export default axiosConfig