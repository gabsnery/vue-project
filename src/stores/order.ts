import type { Product } from '@/services/product/product.interface'
import { defineStore } from 'pinia'
import orderService from '@/services/order'

interface State {
  orders: any[]
}

export const useOrderStore = defineStore({
  id: 'order',
  state: (): State => ({
    orders: []
  }),
  actions: {
    async fetchOrders() {
      const response = await orderService.getOrders()
      console.log('🚀 ~ fetchProducts ~ response:', response)
      this.orders = response.data
    }
  },
  getters: {
    allOrders: (state) => state.orders
  }
})
