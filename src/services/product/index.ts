import apiClient from '../api'
import type { Product } from './product.interface'

export default {
  getProducts() {
    return apiClient.get<Product[]>('/api/product/0/50')
  },
  getProduct(id: number) {
    return apiClient.get<Product>(`/api/product/${id}`)
  },
  createProduct(data: Product) {
    return apiClient.post('/api/product', data)
  },
  updateProduct(id: number, data: Product) {
    return apiClient.put(`/api/product/${id}`, data)
  },
  deleteProduct(id: number) {
    return apiClient.delete(`/api/product/${id}`)
  }
}
