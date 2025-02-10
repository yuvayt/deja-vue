import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import deno from '@deno/vite-plugin'
import { dirname, fromFileUrl, join } from '@std/path'

// https://vite.dev/config/
export default defineConfig({
	base: '/deja-vue/',
	plugins: [deno(), vue()],
	server: {
		port: 6789,
	},
	resolve: {
		alias: {
			'@': join(dirname(fromFileUrl(import.meta.url)), 'src'),
		},
	},
})
