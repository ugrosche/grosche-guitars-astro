import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const guitars = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/***tars'
  })
});

export const col***tions = {
  guitars
};
