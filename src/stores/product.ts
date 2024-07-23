import type { IProduct } from '@/services/product/product.interface'
import { defineStore } from 'pinia'
import productsService from '@/services/product'

interface State {
  products: IProduct[]
}

export const useProductsStore = defineStore({
  id: 'products',
  state: (): State => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const response = await productsService.getProducts()
      this.products = response.data
    }
  },
  getters: {
    allProducts: (state) => state.products
  }
})
