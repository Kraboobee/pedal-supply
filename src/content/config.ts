import { defineCollection, z } from 'astro:content';

const pedalsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image(),
      images: z.array(
        z.array(image()).refine((arr) => [0, 1, 2, 3].includes(arr.length), {
          message: "Each sub-array must contain 1, 2, or 3 items",
        }),
      ),
      price: z.number().positive(),
      order: z.number(),
      draft: z.boolean().optional(),
    }),
});

const accessoriesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image(),
      images: z.array(
        z.array(image()).refine((arr) => [0, 1, 2, 3].includes(arr.length), {
          message: "Each sub-array must contain 1, 2, or 3 items",
        }),
      ),
      price: z.number().positive(),
      order: z.number(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  pedals: pedalsCollection,
  accessories: accessoriesCollection,
};

