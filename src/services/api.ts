import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.apto34.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
