import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every file in src/content/projects/ becomes a project page.
// Frontmatter is validated at build time, so typos fail loudly.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160, 'Keep descriptions under 160 characters for SEO'),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      preview: image().optional(),
      previewAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
