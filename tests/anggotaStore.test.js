import { setActivePinia, createPinia } from 'pinia';
import { useAnggotaStore } from '../src/stores/anggotaStore';

test('fetch anggota returns data', async () => {
  setActivePinia(createPinia());
  const store = useAnggotaStore();
  await store.fetchAnggota();
  expect(store.daftar.length).toBeGreaterThan(0);
});
