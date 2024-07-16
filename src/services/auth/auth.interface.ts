export interface LoginData {
  email: string
  senha: string
}

export interface AuthResponse {
  token: string
  id: number
  nome: string
  email: string
}
