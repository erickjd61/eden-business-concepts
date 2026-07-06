import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'

// PROTECTED FILE — deployment depends on this exact plugin set.
// TanStack Start on Vercel REQUIRES the Nitro plugin. Nitro auto-detects
// Vercel at build time and applies the vercel preset (Vercel Functions).
// Do NOT pass a hosting target to tanstackStart() — `target` there means the
// framework (react/solid), NOT the host. Do not let tooling exports drop nitro().
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    watch: {
      ignored: ['**/.env', '**/.env.*', '**/tsconfig.json', '**/node_modules/**', '**/.git/**'],
    },
  },
  plugins: [
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
})

export default config
