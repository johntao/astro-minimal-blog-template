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
import expressiveCode from 'astro-expressive-code';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
    site: 'https://stargazers.club',
    build: {
        format: 'file',
    },
    output: "static",
    markdown: {
        // remarkPlugins: [remarkToc],
        // rehypePlugins: [[rehypeAutolinkHeadings, { behavior: 'wrap', }]],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap', }]],
        remarkRehype: { footnoteLabel: 'Footnotes' },
        gfm: true,
    },
    integrations: [
        expressiveCode({
            themes: ['dark-plus'],
            shiki: {
                // You can pass additional plugin options here,
                // e.g. to load custom language grammars:
                langs: [
                    // import('./some-exported-grammar.mjs'),
                    // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
                ],
            },
        }),
        mdx(),
        d2({ skipGeneration: !!process.env['VERCEL'], }),
        pagefind(),
        db(),
        alpinejs({ entrypoint: '/src/alpine.main.ts' }), sitemap()
    ],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    },
    adapter: vercel(),
});