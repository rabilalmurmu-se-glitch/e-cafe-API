import { z } from "zod";
export declare const createTypeSchema: z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>;
export declare const updateTypeSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTypeDto = z.infer<typeof createTypeSchema>;
export type UpdateTypeDto = z.infer<typeof updateTypeSchema>;
//# sourceMappingURL=types.dto.d.ts.map