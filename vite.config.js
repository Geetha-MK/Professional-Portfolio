import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you deploy to https://<user>.github.io/<repo>/, set base: '/<repo>/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
