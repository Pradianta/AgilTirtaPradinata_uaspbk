import { createRouter, createWebHistory } from 'vue-router'

// Import views and components
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import BukuList from '../components/BukuList.vue'
import BukuForm from '../components/BukuForm.vue'
import AnggotaList from '../components/AnggotaList.vue'
import AnggotaForm from '../components/AnggotaForm.vue'

const routes = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'buku',
        component: BukuList
      },
      {
        path: 'buku/tambah',
        component: BukuForm
      },
      {
        path: 'anggota',
        component: AnggotaList
      },
      {
        path: 'anggota/tambah',
        component: AnggotaForm
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
