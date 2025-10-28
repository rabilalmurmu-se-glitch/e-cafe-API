import { z } from "zod";
export declare const createOrderListSchema: z.ZodObject<{
    user_id: z.ZodNumber;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        CREATED: "CREATED";
        ORDERED: "ORDERED";
    }>>>;
}, z.core.$strip>;
export declare const updateOrderListSchema: z.ZodObject<{
    user_id: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        CREATED: "CREATED";
        ORDERED: "ORDERED";
    }>>>>;
}, z.core.$strip>;
export type CreateOrderListDto = z.infer<typeof createOrderListSchema>;
export type UpdateOrderListDto = z.infer<typeof updateOrderListSchema>;
//# sourceMappingURL=orderList.dto.d.ts.map