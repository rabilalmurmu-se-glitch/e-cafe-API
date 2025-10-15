import { z } from "zod";

export const createTypeSchema = z.object({
  type: z.string().min(2),
});

export const updateTypeSchema = createTypeSchema.partial();

export type CreateTypeDto = z.infer<typeof createTypeSchema>;
export type UpdateTypeDto = z.infer<typeof updateTypeSchema>;
