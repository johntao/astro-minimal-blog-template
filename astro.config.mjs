// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';
// import remarkToc from 'remark-toc';
// import rehypePresetMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";
import d2 from 'astro-d2';

import db from '@astrojs/db';

import alpinejs from '@astrojs/alpinejs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
    },
    output: "static",
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: { theme: 'dark-plus' },
        // remarkPlugins: [remarkToc],
        // rehypePlugins: [[rehypeAutolinkHeadings, { behavior: 'wrap', }]],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap', }]],
        remarkRehype: { footnoteLabel: 'Footnotes' },
        gfm: true,
    },
    integrations: [mdx(), d2(), pagefind(), db(), alpinejs()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
});