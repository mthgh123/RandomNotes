import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
const config =  defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src", //定义@为src路径。tsconfig.json中也要配置
    }
  }
})
export default config;
