import { z } from "zod";
export declare const createItemSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    category_id: z.ZodNumber;
    shop_id: z.ZodNumber;
    photo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateItemSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    category_id: z.ZodOptional<z.ZodNumber>;
    shop_id: z.ZodOptional<z.ZodNumber>;
    photo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateItemDto = z.infer<typeof createItemSchema>;
export type UpdateItemDto = z.infer<typeof updateItemSchema>;
//# sourceMappingURL=item.dto.d.ts.map