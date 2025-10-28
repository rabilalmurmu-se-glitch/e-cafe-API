import { z } from "zod";
export declare const createShopSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    owner: z.ZodString;
    banner: z.ZodString;
    logo: z.ZodString;
    about_shop: z.ZodString;
    shop_mission: z.ZodString;
    social: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export declare const updateShopSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    owner: z.ZodOptional<z.ZodString>;
    banner: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    about_shop: z.ZodOptional<z.ZodString>;
    shop_mission: z.ZodOptional<z.ZodString>;
    social: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type CreateShopDto = z.infer<typeof createShopSchema>;
export type UpdateShopDto = z.infer<typeof updateShopSchema>;
//# sourceMappingURL=shop.dto.d.ts.map