<template>
  <div>
    <h2>Daftar Anggota</h2>
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
<tbody>
  <tr v-for="anggota in anggotaStore.daftar" :key="anggota.id">
    <td>{{ anggota.nama }}</td>
    <td>{{ anggota.kelas }}</td>
    <td>
      <button @click="editAnggota(anggota.id)">Edit</button>
      <button @click="hapusAnggota(anggota.id)">Hapus</button>
    </td>
  </tr>
</tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAnggotaStore } from '../stores/anggotaStore'

const anggotaStore = useAnggotaStore()
const router = useRouter()

function editAnggota(id) {
  router.push(`/dashboard/anggota/tambah?id=${id}`)
}

async function hapusAnggota(id) {
  if (confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
    try {
      await fetch(`http://localhost:3000/anggota/${id}`, { method: 'DELETE' })
      anggotaStore.fetchAnggota()
    } catch (error) {
      console.error('Error deleting anggota:', error)
    }
  }
}

onMounted(() => {
  anggotaStore.fetchAnggota()
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
