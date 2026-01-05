import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Reemplaza REPO_NAME por tu repositorio (por ejemplo: '/my-make-file/')
// Para páginas de usuario/organización puedes usar './' o '/' según necesidad
const repoBase = './'

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
