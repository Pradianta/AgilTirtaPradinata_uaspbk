<template>
  <div class="login-page">
    <div class="login-card">
      <h2 class="title">Admin Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" placeholder="Enter username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" class="btn-login">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

function login() {
  // Simple hardcoded login for demonstration
  if (username.value === 'admin' && password.value === 'admin') {
    router.push('/dashboard')
  } else {
    error.value = 'Username or password is incorrect'
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-card {
  background: white;
  padding: 2.5em 3em;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  width: 350px;
  text-align: center;
}

.title {
  margin-bottom: 1.5em;
  color: #333;
  font-weight: 700;
  font-size: 1.8em;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 0.4em;
  font-weight: 600;
  color: #555;
}

.form-group input {
  padding: 0.6em 0.8em;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 8px rgba(102, 126, 234, 0.5);
}

.btn-login {
  background-color: #667eea;
  color: white;
  padding: 0.75em 0;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #5563c1;
}

.error {
  margin-top: 1em;
  color: #e74c3c;
  font-weight: 600;
}
</style>
