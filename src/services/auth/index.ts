import apiClient from '../api'
import type { AuthResponse, LoginData } from './auth.interface'

export default {
  login(data: LoginData) {
    return apiClient.post<AuthResponse>('/login', { ...data, grantType: 'password' })
  },
  logout() {
    // Lógica de logout, se necessário
  }
}
