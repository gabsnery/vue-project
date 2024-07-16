import type { Product } from '@/services/product/product.interface'
import { defineStore } from 'pinia'
import productsService from '@/services/product'

interface State {
  products: Product[]
}

export const useProductsStore = defineStore({
  id: 'products',
  state: (): State => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const response = await productsService.getProducts()
      console.log('🚀 ~ fetchProducts ~ response:', response)
      this.products = response.data
    }
  },
  getters: {
    allProducts: (state) => state.products
  }
})
