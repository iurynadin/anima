import { defineConfig } from 'vite'
import { resolve } from 'path'
import staticCopy from './vite-plugin-static-copy'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  build: {
    assetsDir: command === 'build' ? '' : 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  plugins: [staticCopy()]
}))