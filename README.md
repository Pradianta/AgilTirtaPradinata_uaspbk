# Sistem Manajemen Perpustakaan

Sebuah aplikasi berbasis web untuk mengelola data anggota dan buku perpustakaan. Dibangun menggunakan *Vue 3 + Vite, dengan **Pinia* untuk state management dan *JSON Server* sebagai backend API. Aplikasi ini mendukung operasi CRUD serta memiliki fitur autentikasi sederhana.

##  Fitur Utama

- Login (autentikasi sederhana)
- Dashboard jumlah total buku dan anggota
- CRUD data anggota
- CRUD data buku
- Navigasi via Vue Router
- State management dengan Pinia
- Backend menggunakan JSON Server (simulasi API)
- Unit testing menggunakan Vitest

##  Struktur Proyek

src/
├── components/
│ ├── BukuList.vue
│ ├── BukuForm.vue
│ ├── AnggotaList.vue
│ ├── AnggotaForm.vue
│ └── HelloWorld.vue
├── router/
│ └── index.js
├── stores/
│ └── anggotaStore.js
├── views/
│ ├── LoginPage.vue
│ └── DashboardPage.vue
├── App.vue
├── main.js
tests/
├── anggotaStore.test.js
db.json


##  Instalasi

```bash
# Clone repositori
git clone https://github.com/Pradianta/AgilTirtaPradinata_uaspbk.git
cd AgilTirtaPradinata_uaspbk

# Install dependencies
npm install

# Jalankan JSON Server di port 3000
npx json-server --watch db.json --port 3000

# Jalankan project di localhost:5173
npm run dev
🔌 Dependencies

Beberapa dependensi utama:

"dependencies": {
  "vue": "^3.x",
  "vue-router": "^4.x",
  "pinia": "^2.x",
  "axios": "^1.x"
}

 Unit Test

Proyek ini menggunakan Vitest untuk pengujian unit, khususnya store anggota:

# Jalankan unit test
npx vitest run
file test: tests/anggotaStore.test.js.

 Author

Nama: Agil Tirta Pradinata
NPM: 233510506
Mata Kuliah: Pemrograman Berbasis Komponen (PBK)
