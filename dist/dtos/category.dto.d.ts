import { z } from "zod";
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    type_id: z.ZodNumber;
    shop_id: z.ZodNumber;
    photo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    shop_id: z.ZodOptional<z.ZodNumber>;
    photo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;
//# sourceMappingURL=category.dto.d.ts.map