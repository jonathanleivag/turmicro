/* eslint-disable*/
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), StylelintPlugin({ allowEmptyInput: true })],
  define: {
    'process.env': {},
    global: {}
  }
})
