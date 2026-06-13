import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

// PROTECTED FILE — do not let tooling exports overwrite.
// The vercel target is required for deployment (see XTRM playbook).
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({ target: 'vercel' }),
    viteReact(),
  ],
})

export default config
