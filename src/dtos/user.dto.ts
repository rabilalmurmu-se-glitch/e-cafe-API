import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(6),
  address: z.string(),
  gender: z.enum(["MALE", "FEMALE"]),
  type: z.enum(["CUSTOMER", "OWNER", "MAMBER"]).default("CUSTOMER"),
});

export const updateUserSchema = createUserSchema.partial();

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type LoginUserDto = z.infer<typeof loginUserSchema>;
