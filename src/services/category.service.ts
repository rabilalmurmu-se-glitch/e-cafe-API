// src/services/category.service.ts
import { BaseService } from "./base.service";

export class CategoryService extends BaseService<"categories"> {
  constructor() {
    super("categories");
  }

  async findByShop(shopId: number) {
    return await this.client.findMany({ where: { shop_id: shopId } });
  }

  async findByType(typeId: number) {
    return await this.client.findMany({ where: { type_id: typeId } });
  }
}

export const categoryService = new CategoryService();
