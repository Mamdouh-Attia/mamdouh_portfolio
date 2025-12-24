import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        learning: resolve(__dirname, 'pages/learning.html'),
        teaching: resolve(__dirname, 'pages/teaching.html'),
        certificates: resolve(__dirname, 'pages/certificates.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        designSystem: resolve(__dirname, 'pages/design-system.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
