import { defineConfig } from 'vite'

export default defineConfig({
  base: '/term/',
  publicDir: 'public',
  build: {
    outDir: '../../term',
    emptyOutDir: true,
  },
})
