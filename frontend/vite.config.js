import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      protocol: 'wss',
      host: 'chat.teckneeka.com',
      clientPort: 443
    },
    proxy: {
      '/api': {
        target: 'https://chat.teckneeka.com',
        changeOrigin: true,
        secure: false
      },
      '/socket.io': {
        target: 'https://chat.teckneeka.com',
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  }
});
