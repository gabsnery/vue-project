import apiClient from '../api'

export default {
  getOrders() {
    return apiClient.get<any[]>('/api/order')
  }
}
