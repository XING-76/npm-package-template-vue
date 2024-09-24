import path from 'path'
import { defineConfig } from 'vite'
import createVitePlugins from './vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVitePlugins()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles.scss";`
      }
    }
  },
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TC-Library",
      // the name of the output files when the build is run
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
