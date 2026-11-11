import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (/\/(react|react-dom|scheduler)\//.test(id)) return "react-vendor";
          if (/\/react-router(?:-dom)?\//.test(id)) return "router-vendor";
          if (/\/(framer-motion|motion|motion-dom|motion-utils)\//.test(id)) return "motion-vendor";
          if (/\/react-icons\//.test(id)) return "icons-vendor";
          return "vendor";
        },
      },
    },
  },
})
