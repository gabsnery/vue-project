import type { IOrder } from '@/services/order/order.interface'
import { defineStore } from 'pinia'
import orderService from '@/services/order'

interface State {
  orders: IOrder[]
}

export const useOrderStore = defineStore({
  id: 'order',
  state: (): State => ({
    orders: []
  }),
  actions: {
    async fetchOrders() {
      const response = await orderService.getOrders()
      this.orders = response.data
    }
  },
  getters: {
    allOrders: (state) => state.orders
  }
})
