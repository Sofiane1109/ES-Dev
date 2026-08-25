import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        mentionsLegales: fileURLToPath(new URL('./mentions-legales.html', import.meta.url)),
        politiqueConfidentialite: fileURLToPath(
          new URL('./politique-confidentialite.html', import.meta.url)
        ),
      },
    },
  },
})
