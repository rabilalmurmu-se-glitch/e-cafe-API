import { z } from "zod";

export const createOrderSchema = z.object({
  order_id: z.string().uuid().or(z.string().min(6)), // support UUID or string
  order_list_id: z.number().int().positive(),
  user_id: z.number().int().positive(),
  status: z.enum(["PENDING","ORDER PLACED","PROCESSING","DELIVARED"]).default("PENDING"),
  total_price: z.number().int().positive()
});

export const updateOrderSchema = createOrderSchema.partial();

export type CreateOrderDto = z.infer<typeof createOrderSchema>;
export type UpdateOrderDto = z.infer<typeof updateOrderSchema>;
