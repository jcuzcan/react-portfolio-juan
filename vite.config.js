import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Ensures Vite knows where to start
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: This sets up a cleaner alias for imports
    },
  },
});
