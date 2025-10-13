// src/services/item.service.ts
import { BaseService } from "./base.service";

export class ItemService extends BaseService<"items"> {
  constructor() {
    super("items");
  }

  async findByCategory(categoryId: number) {
    return await this.client.findMany({ where: { category_id: categoryId } });
  }

  async findByShop(shopId: number) {
    return await this.client.findMany({ where: { shop_id: shopId } });
  }
}

export const itemService = new ItemService();
