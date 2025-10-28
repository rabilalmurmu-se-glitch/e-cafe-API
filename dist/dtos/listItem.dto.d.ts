import { z } from "zod";
export declare const createListItemSchema: z.ZodObject<{
    order_list_id: z.ZodNumber;
    item_id: z.ZodNumber;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export declare const updateListItemSchema: z.ZodObject<{
    order_list_id: z.ZodOptional<z.ZodNumber>;
    item_id: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateListItemDto = z.infer<typeof createListItemSchema>;
export type UpdateListItemDto = z.infer<typeof updateListItemSchema>;
//# sourceMappingURL=listItem.dto.d.ts.map