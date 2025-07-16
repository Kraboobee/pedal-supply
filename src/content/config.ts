import { defineCollection, z } from 'astro:content';

const pedalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number().positive(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  pedals: pedalsCollection,
};
