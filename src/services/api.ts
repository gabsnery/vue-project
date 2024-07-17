import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://apto34-app-5f2022b3c839.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    console.log('🚀 ~ authStore:', authStore.token)
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
