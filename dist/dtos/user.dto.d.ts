import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodString>;
    about: z.ZodOptional<z.ZodString>;
    gender: z.ZodEnum<{
        MALE: "MALE";
        FEMALE: "FEMALE";
    }>;
    type: z.ZodDefault<z.ZodEnum<{
        OWNER: "OWNER";
        CUSTOMER: "CUSTOMER";
        MAMBER: "MAMBER";
    }>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    password: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    photo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    about: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    gender: z.ZodOptional<z.ZodEnum<{
        MALE: "MALE";
        FEMALE: "FEMALE";
    }>>;
    type: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        OWNER: "OWNER";
        CUSTOMER: "CUSTOMER";
        MAMBER: "MAMBER";
    }>>>;
}, z.core.$strip>;
export declare const loginUserSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type LoginUserDto = z.infer<typeof loginUserSchema>;
//# sourceMappingURL=user.dto.d.ts.map