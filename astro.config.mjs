import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://ugrosche.github.io',
  base: process.env.ASTRO_PREVIEW === '1' ? '/' : '/grosche-guitars-astro',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
