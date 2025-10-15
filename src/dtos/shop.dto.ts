import { z } from "zod";

export const createShopSchema = z.object({
  name: z.string().min(2),
  address: z.string(),
  email: z.string().email(),
  phone: z.string().min(7),
  owner: z.string(),
  banner: z.string(),
  logo: z.string(),
  about_shop: z.string(),
  shop_mission: z.string(),
  social: z.record(z.any()), // For JSON field
});

export const updateShopSchema = createShopSchema.partial();

export type CreateShopDto = z.infer<typeof createShopSchema>;
export type UpdateShopDto = z.infer<typeof updateShopSchema>;
