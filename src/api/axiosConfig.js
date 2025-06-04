import axios from 'axios'

const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: 'https://students-social-api.onrender.com/api/'
})

axiosConfig.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest.sent) {
            originalRequest.sent = true

            try {

                await axios.get('https://students-social-api.onrender.com/api/refresh-tokens')

                return axiosConfig(originalRequest)

            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosConfig