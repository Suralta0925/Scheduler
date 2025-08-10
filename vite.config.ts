import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Programming-Practice/React/reactPractice/my-react-app",
  plugins: [react()],
})

