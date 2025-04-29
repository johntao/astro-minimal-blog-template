// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), preact()],
	vite: {
		plugins: [tailwindcss()]
	}
});
