import { defineStore } from 'pinia';

export const useAnggotaStore = defineStore('anggota', {
  state: () => ({
    daftar: []
  }),
  actions: {
    async fetchAnggota() {
      const res = await fetch('http://localhost:3000/anggota');
      this.daftar = await res.json();
    }
  }
});
