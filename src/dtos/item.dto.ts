import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
  price: z.number().int().positive(),
  category_id: z.number().int().positive(),
  shop_id: z.number().int().positive(),
  photo: z.string().optional(),
});

export const updateItemSchema = createItemSchema.partial();

export type CreateItemDto = z.infer<typeof createItemSchema>;
export type UpdateItemDto = z.infer<typeof updateItemSchema>;
