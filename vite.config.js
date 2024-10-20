import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // This is good, but it can be omitted as '.' is the default.
  build: {
    outDir: 'dist',  // Specify the output directory for the build
  },
});
