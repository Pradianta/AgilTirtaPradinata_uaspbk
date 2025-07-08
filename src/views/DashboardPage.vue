<template>
  <div class="dashboard-page">
    <div class="dashboard-content">
      <nav>
        <ul>
          <li>
            <router-link to="/dashboard" class="menu-header" exact>Dashboard</router-link>
          </li>
          <li>
            <button class="menu-header" @click="toggleMenu('buku')">
              Buku
              <span :class="{'arrow-down': isMenuOpen.buku, 'arrow-right': !isMenuOpen.buku}"></span>
            </button>
            <ul v-show="isMenuOpen.buku" class="submenu">
              <li><router-link to="/dashboard/buku" active-class="active-submenu">Lihat Semua Buku</router-link></li>
              <li><router-link to="/dashboard/buku/tambah" active-class="active-submenu">Tambah Buku</router-link></li>
            </ul>
          </li>
          <li>
            <button class="menu-header" @click="toggleMenu('anggota')">
              Anggota
              <span :class="{'arrow-down': isMenuOpen.anggota, 'arrow-right': !isMenuOpen.anggota}"></span>
            </button>
            <ul v-show="isMenuOpen.anggota" class="submenu">
              <li><router-link to="/dashboard/anggota" active-class="active-submenu">Lihat Semua Anggota</router-link></li>
              <li><router-link to="/dashboard/anggota/tambah" active-class="active-submenu">Tambah Anggota</router-link></li>
            </ul>
          </li>
          <li>
            <button class="menu-header" @click="logout">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div class="main-content">
        <div class="stats">
          <div class="stat">
            <h3>Total Buku</h3>
            <p>{{ totalBuku }}</p>
          </div>
          <div class="stat">
            <h3>Total Anggota</h3>
            <p>{{ totalAnggota }}</p>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const totalBuku = ref(0)
const totalAnggota = ref(0)

const isMenuOpen = reactive({
  buku: true,
  anggota: true
})

function toggleMenu(menu) {
  isMenuOpen[menu] = !isMenuOpen[menu]
}

function logout() {
  router.push('/')
}

onMounted(async () => {
  try {
    const bukuRes = await axios.get('http://localhost:3000/buku')
    totalBuku.value = bukuRes.data.length
    const anggotaRes = await axios.get('http://localhost:3000/anggota')
    totalAnggota.value = anggotaRes.data.length
  } catch (error) {
    console.error('Error fetching stats:', error)
  }
})
</script>

<style scoped>
.dashboard-page {
  /* Remove max-width and center margin to shift fully left */
  margin: 2em 0 2em 0;
  padding: 1em;
  color: #e0e7ff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 1em;
  color: #0f172a;
  font-weight: 600;
}
.dashboard-content {
  display: flex;
  gap: 2em;
}
nav {
  width: 200px;
  position: sticky;
  top: 1em;
  align-self: flex-start;
  background-color: #1e293b;
  border-radius: 8px;
  padding: 1em;
  color: #cbd5e1;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
nav ul > li {
  margin-bottom: 1em;
}
.menu-header {
  background: none;
  border: none;
  color: #cbd5e1;
  font-size: 1.1em;
  width: 100%;
  text-align: left;
  padding: 0.5em 0.75em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}
.menu-header:hover {
  background-color: #334155;
}
.submenu {
  list-style: none;
  padding-left: 1em;
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.submenu li {
  background-color: transparent;
  border-radius: 6px;
}
.submenu li a {
  display: block;
  padding: 0.5em 0.75em;
  color: #cbd5e1;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}
.submenu li a:hover {
  background-color: #7c3aed;
  color: white;
}
.active-submenu {
  background-color: #7c3aed !important;
  color: white !important;
  font-weight: 700;
}
.arrow-right::before {
  content: "▶";
  font-size: 0.7em;
  color: #94a3b8;
}
.arrow-down::before {
  content: "▼";
  font-size: 0.7em;
  color: #7c3aed;
}
.main-content {
  flex-grow: 1;
  background-color: #f8fafc;
  border-radius: 8px;
  padding: 1.5em;
  color: #0f172a;
  min-height: 400px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.stats {
  display: flex;
  gap: 2em;
  margin-bottom: 1em;
}
.stat {
  background: #334155;
  padding: 1.5em;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  color: #e0e7ff;
  box-shadow: 0 4px 8px rgba(124, 58, 237, 0.6);
  font-weight: 600;
  font-size: 1.1em;
}
@media (max-width: 768px) {
  .dashboard-content {
    flex-direction: column;
  }
  nav {
    width: 100%;
    position: relative;
    top: auto;
    margin-bottom: 1em;
  }
  .main-content {
    padding: 1em;
  }
  .stats {
    flex-direction: column;
  }
}
</style>
