import { defineStore } from 'pinia'
import { ref } from 'vue'
import authService from '@/services/auth'
import type { AuthResponse, LoginData } from '@/services/auth/auth.interface'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<AuthResponse['email'] | null>(
    token.value ? JSON.parse(localStorage.getItem('email')!) : null
  )
  const error = ref<string | null>(null)
  console.log("🚀 ~ useAuthStore ~ localStorage.getItem('email'):", localStorage.getItem('email'))

  async function login(data: LoginData) {
    try {
      const response = await authService.login(data)
      console.log('🚀 ~ login ~ response:', response)
      token.value = response.data.token
      user.value = response.data.email
      localStorage.setItem('token', token.value)
      localStorage.setItem('email', user.value)
      error.value = null
    } catch (err) {
      error.value = 'Login failed'
    }
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  return {
    token,
    user,
    error,
    login,
    logout
  }
})
