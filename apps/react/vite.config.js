import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import process from 'process'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
  const rootDir = '../../'
  process.env = {...process.env, ...loadEnv(mode, path.resolve(process.cwd(), rootDir))}
  return {
    plugins: [react()],
    envDir: rootDir,
    base: `${process.env.VITE_BASE_PREFIX}/react/`,
    server: {
      port: 3001,
      strictPort: true,
    },
    build: {
      outDir: '../../dist/react',
    },
  }
})
