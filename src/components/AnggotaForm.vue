<template>
  <div>
    <h2>{{ isEdit ? 'Edit Anggota' : 'Tambah Anggota' }}</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nama">Nama:</label>
        <input id="nama" v-model="anggota.nama" type="text" required />
      </div>
      <div>
        <label for="kelas">Kelas:</label>
        <input id="kelas" v-model="anggota.kelas" type="text" required />
      </div>
      <button type="submit">{{ isEdit ? 'Update' : 'Tambah' }}</button>
      <button type="button" @click="cancel">Batal</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const anggota = ref({
  nama: '',
  kelas: ''
})

const isEdit = ref(false)
const anggotaId = ref(null)

onMounted(async () => {
  anggotaId.value = route.query.id
  if (anggotaId.value) {
    isEdit.value = true
    try {
      const response = await axios.get(`http://localhost:3000/anggota/${anggotaId.value}`)
      anggota.value = response.data
    } catch (error) {
      console.error('Error fetching anggota:', error)
    }
  }
})

async function submitForm() {
  try {
    if (isEdit.value) {
      await axios.put(`http://localhost:3000/anggota/${anggotaId.value}`, anggota.value)
    } else {
      await axios.post('http://localhost:3000/anggota', anggota.value)
    }
    router.push('/dashboard/anggota')
  } catch (error) {
    console.error('Error saving anggota:', error)
  }
}

function cancel() {
  router.push('/dashboard/anggota')
}
</script>

<style scoped>
div {
  background-color: #1e293b;
  padding: 1em;
  border-radius: 8px;
  color: #cbd5e1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
form div {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.3em;
  color: #cbd5e1;
}
input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #334155;
  background-color: #0f172a;
  color: #cbd5e1;
  font-size: 1em;
}
input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 5px #7c3aed;
}
button {
  margin-right: 0.5em;
  background-color: #7c3aed;
  border: none;
  color: white;
  padding: 0.5em 1em;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1em;
}
button:hover {
  background-color: #5a22b7;
}
</style>
