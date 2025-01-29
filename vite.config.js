import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Set root directory to 'src'
    build: {
        outDir: '../dist', // Output directory for the build
        emptyOutDir: true, // Clears the output directory before building
    },
    publicDir: '../public', // Set public directory to 'public'
});