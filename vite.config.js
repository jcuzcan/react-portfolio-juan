import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // This ensures Vite uses the current directory as root
  build: {
    rollupOptions: {
      input: './index.html',  // Ensure it knows where your index.html is located
    },
  },
})
