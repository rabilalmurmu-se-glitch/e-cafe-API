import { z } from "zod";

export const createOrderListSchema = z.object({
  user_id: z.number().int().positive(),
  status: z.enum(["CREATED", "ORDERED"]).optional().default("CREATED"),
});

export const updateOrderListSchema = createOrderListSchema.partial();

export type CreateOrderListDto = z.infer<typeof createOrderListSchema>;
export type UpdateOrderListDto = z.infer<typeof updateOrderListSchema>;
