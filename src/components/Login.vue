<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')
    const authStore = useAuthStore()

    const handleLogin = () => {
      authStore.login({ email: email.value, senha: password.value })
    }

    return {
      email,
      password,
      handleLogin,
      error: authStore.error
    }
  }
})
</script>
