import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

const ALIAS = [
  'assets',
  'type',
  'utils',
  'routes',
  'layouts',
  'views',
  'components',
  'styles',
  'hooks',
  'generated',
];

/**
 * 生成文件夹别名
 * @param config
 */
const generateAlias = (config) =>
  config.map((c) => ({
    find: `@/${c}`,
    replacement: path.resolve(__dirname, `./src/${c}`),
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    open: '/login',
    watch: {
      usePolling: true,
    },
    proxy: {
      '/shawicx/api': {
        target: 'http://localhost:8980',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shawicx\/api/, ''),
      },
    },
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      less: {
        // javascriptEnabled: true,
      },
    },
    devSourcemap: true,
  },
  resolve: {
    alias: generateAlias(ALIAS),
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.less'],
  },
});
