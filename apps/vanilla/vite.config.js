import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import process from 'process'

export default defineConfig(({mode}) => {
  const rootDir = '../../'
  process.env = {...process.env, ...loadEnv(mode, path.resolve(process.cwd(), rootDir))}
  return {
    envDir: rootDir,
    base: `${process.env.VITE_BASE_PREFIX}/vanilla/`,
    server: {
      port: 3002,
      strictPort: true,
    },
    build: {
      outDir: '../../dist/vanilla',
    },
  }
})
