import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
	plugins: [deno(), vue()],
})
