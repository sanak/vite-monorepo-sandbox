import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, isPreview}) => {
  console.log(`command: ${command}, mode: ${mode}, isPreview: ${isPreview}`)
  const rootDir = '../../'
  process.env = {...process.env, ...loadEnv(mode, path.resolve(process.cwd(), rootDir))}
  const isDev = (mode === 'development')
  return {
    envDir: rootDir,
    base: `${process.env.VITE_BASE_PREFIX}/`,
    appType: 'mpa',
    server: isDev ? {
      port: 3000,
      strictPort: true,
      open: true,
      proxy: {
        '/react': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/react/, ''),
        },
        '/vanilla': {
          target: 'http://localhost:3002',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/vanilla/, ''),
        },
      }
    } : undefined,
    build: {
      outDir: '../../dist',
    },
    preview: {
      port: 4000,
      strictPort: true,
      open: true,
    },
  }
})
