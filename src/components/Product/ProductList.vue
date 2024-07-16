<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.nome }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '@/stores/product'

export default defineComponent({
  name: 'Products',
  setup() {
    const productsStore = useProductsStore()
    productsStore.fetchProducts()

    console.log('🚀 ~ setup ~ productsStore:', productsStore)
    return {
      products: productsStore.products
    }
  }
})
</script>
