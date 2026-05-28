import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages 用户站：https://xieshuang.github.io/（仓库须命名为 xieshuang.github.io） */
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
