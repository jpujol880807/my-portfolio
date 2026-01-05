import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Replace REPO_NAME with your repository (e.g., '/my-make-file/')
// For user/organization pages you can use './' or '/' as needed
const repoBase = '/my-portfolio/'

export default defineConfig({
    base: repoBase,
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
