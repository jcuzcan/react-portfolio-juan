import { defineConfig } from 'vite'; // Make sure this is imported only once
import react from '@vitejs/plugin-react'; // Make sure this is imported only once
import path from 'path'; // This is needed for resolving paths

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures the correct base path
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
});
