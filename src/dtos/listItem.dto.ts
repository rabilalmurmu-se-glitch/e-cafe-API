import { z } from "zod";

export const createListItemSchema = z.object({
  order_list_id: z.number().int().positive(),
  item_id: z.number().int().positive(),
});

export const updateListItemSchema = createListItemSchema.partial();

export type CreateListItemDto = z.infer<typeof createListItemSchema>;
export type UpdateListItemDto = z.infer<typeof updateListItemSchema>;
