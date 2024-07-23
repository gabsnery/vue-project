<template>
  <div>
    <h1>Products</h1>
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" v-bind:key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/product'

export default defineComponent({
  name: 'Products',
  setup() {
    const products = ref([])
    onMounted(async () => {
      const productsStore = useProductsStore()
      await productsStore.fetchProducts()
      console.log("🚀 ~ onMounted ~ productsStore:", productsStore)
      products.value = productsStore.products
    })
    return {
      products: products
    }
  }
})
</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
