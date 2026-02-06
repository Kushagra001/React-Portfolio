import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    build: {
        outDir: "build",
        chunkSizeWarningLimit: 1000,
        // manualChunks removed to prevent CSS ordering issues
    },
    server: {
        open: true,
    },
});
