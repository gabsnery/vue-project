<template>
  <div>
    <h1>Orders</h1>
    <table class="styled-table">
      <thead>
        <tr>
<th>data_pedido_realizado</th>
<th>id</th>
<th>idPagamento</th>
<th>idPedidoStatus</th>
<th>pedido_concluido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" v-bind:key="order.id">
<td>{{order.data_pedido_realizado}}</td>
<td>{{order.id}}</td>
<td>{{order.idPagamento}}</td>
<td>{{order.idPedidoStatus}}</td>
<td>{{order.pedido_concluido}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useOrderStore } from '@/stores/order'

export default defineComponent({
  name: 'Orders',
  setup() {
    const orders = ref([])
    onMounted(async () => {
      const ordersStore = useOrderStore()
      await ordersStore.fetchOrders()
      console.log("🚀 ~ onMounted ~ ordersStore:", ordersStore)
      orders.value = ordersStore.orders
    })
    return {
      orders: orders
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
