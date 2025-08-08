import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "x-form.js",
        assetFileNames: "x-form.[ext]",
      },
    }
  },
    server: {
    // Alternatively, to allow all hosts (not recommended for security reasons)
    allowedHosts: true,
  },

})
