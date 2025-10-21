import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(2),
  type_id: z.number().int().positive(),
  shop_id: z.number().int().positive(),
  photo:z.string().optional()
});

export const updateCategorySchema = createCategorySchema.partial();

export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;
