<template>
  <form @submit.prevent="handleSubmit" class="styled-form">
    <div class="form-group">
      <label for="name">Nome do Produto:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div class="form-group">
      <label for="description">Descrição:</label>
      <textarea id="description" v-model="form.description" required></textarea>
    </div>
    <div class="form-group">
      <label for="price">Preço:</label>
      <input type="number" id="price" v-model="form.price" required />
    </div>
    <div class="form-group">
      <label for="category">Categoria:</label>
      <input type="text" id="category" v-model="form.category" required />
    </div>
    <div class="form-group">
      <label for="image">URL da Imagem:</label>
      <input type="url" id="image" v-model="form.image" required />
    </div>
    <button type="submit" class="submit-button">Salvar Produto</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProductForm',
  setup() {
    const form = ref({
      name: '',
      description: '',
      price: 0,
      category: '',
      image: ''
    })

    const handleSubmit = () => {
      // Aqui você pode adicionar a lógica para enviar o formulário
      console.log('Produto salvo:', form.value)
      // Exemplo de como enviar os dados com Axios:
      // axios.post('/api/produtos', form.value).then(response => { ... });
    }

    return {
      form,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.styled-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #009879;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #009879;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #007f67;
}
</style>
