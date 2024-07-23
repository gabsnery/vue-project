import apiClient from '../api'
import type { IProduct } from './product.interface'

export default {
  getProducts() {
    return apiClient.get<IProduct[]>('/api/product/0/50')
  },
  getProduct(id: number) {
    return apiClient.get<IProduct>(`/api/product/${id}`)
  },
  createProduct(data: IProduct) {
    return apiClient.post('/api/product', data)
  },
  updateProduct(id: number, data: IProduct) {
    return apiClient.put(`/api/product/${id}`, data)
  },
  deleteProduct(id: number) {
    return apiClient.delete(`/api/product/${id}`)
  }
}
