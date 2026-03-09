import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // habilitar JSX sin importar React
    tailwindcss(), // Tailwind 4
  ],
})