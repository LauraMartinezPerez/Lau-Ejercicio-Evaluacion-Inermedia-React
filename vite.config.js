import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { watch: { usePolling: true }, open: true, },
  /* server:{open: true,}, */
  base: "/Filtro-de-Banderas-React/",
})
