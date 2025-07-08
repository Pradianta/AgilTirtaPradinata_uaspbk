<template>
  <div>
    <h2>Daftar Buku</h2>
    <table>
      <thead>
        <tr>
          <th>Judul</th>
          <th>Pengarang</th>
          <th>Tahun</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="buku in daftarBuku" :key="buku.id">
          <td>{{ buku.judul }}</td>
          <td>{{ buku.pengarang }}</td>
          <td>{{ buku.tahun }}</td>
          <td>
            <button @click="editBuku(buku.id)">Edit</button>
            <button @click="hapusBuku(buku.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const daftarBuku = ref([])
const router = useRouter()

async function fetchBuku() {
  try {
    const response = await axios.get('http://localhost:3000/buku')
    daftarBuku.value = response.data
  } catch (error) {
    console.error('Error fetching buku:', error)
  }
}

function editBuku(id) {
  router.push(`/dashboard/buku/tambah?id=${id}`)
}

async function hapusBuku(id) {
  if (confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
    try {
      await axios.delete(`http://localhost:3000/buku/${id}`)
      fetchBuku()
    } catch (error) {
      console.error('Error deleting buku:', error)
    }
  }
}

onMounted(() => {
  fetchBuku()
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1e293b;
  color: #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
}
th, td {
  border: 1px solid #334155;
  padding: 0.75em;
  text-align: left;
}
th {
  background-color: #334155;
}
tbody tr:hover {
  background-color: #7c3aed;
  color: white;
}
button {
  margin-right: 0.5em;
  background-color: #7c3aed;
  border: none;
  color: white;
  padding: 0.4em 0.8em;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #5a22b7;
}
</style>
