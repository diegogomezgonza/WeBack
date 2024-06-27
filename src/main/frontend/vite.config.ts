import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambiar ruta de build al static de spring boot
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../resources/static/',
    emptyOutDir: true,
  },
});
