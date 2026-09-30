import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const guitars = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guitars',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  })
});

const workshop = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/workshop',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  })
});

export const collections = {
  guitars,
  workshop
};
