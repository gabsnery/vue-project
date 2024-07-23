import apiClient from '../api'
import type { IOrder } from './order.interface'

export default {
  getOrders() {
    return apiClient.get<IOrder[]>('/api/order')
  }
}
