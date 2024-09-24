import vue from '@vitejs/plugin-vue'
import createAutoImport from './plugins/auto-import'
// import eslintPlugin from 'vite-plugin-eslint'
// import dts from 'vite-plugin-dts'

export default function createVitePlugins() {
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  // vitePlugins.push(
  //   eslintPlugin({
  //     cache: false,
  //     include: ['**/*.vue', './src/**/*.ts']
  //   })
  // )
  // vitePlugins.push(dts())

  return vitePlugins
}
