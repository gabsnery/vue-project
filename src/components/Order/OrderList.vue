<template>
  <div>
    <h1>Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">{{ order.nome }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useOrderStore } from '@/stores/order'

export default defineComponent({
  name: 'Orders',
  setup() {
    const ordersStore = useOrderStore()
    ordersStore.fetchOrders()

    console.log('🚀 ~ setup ~ productsStore:', ordersStore)
    return {
      orders: ordersStore.orders
    }
  }
})
</script>
