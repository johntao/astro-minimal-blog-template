import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const aiGeneratedCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  'ai-generated': aiGeneratedCollection,
};
