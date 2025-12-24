import { defineConfig } from 'vite';
import { resolve } from 'path';

// Admin config - separate from main site
export default defineConfig({
    root: './admin',
    base: './',
    build: {
        outDir: '../dist-admin',
        rollupOptions: {
            input: {
                login: resolve(__dirname, 'admin/index.html'),
                dashboard: resolve(__dirname, 'admin/dashboard.html'),
                projects: resolve(__dirname, 'admin/projects.html'),
            }
        }
    },
    server: {
        port: 3001,
        open: true
    }
});
