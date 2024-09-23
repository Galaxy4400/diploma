import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: (content, filename) => {
					if (filename.endsWith('.module.scss')) {
						return `
							@import "@/shared/assets/styles/abstracts/functions.scss";
							@import "@/shared/assets/styles/abstracts/variables.scss";
							@import "@/shared/assets/styles/abstracts/mixins.scss";
							${content}
						`;
					}
					return content;
				},
			},
		},
	},
});
