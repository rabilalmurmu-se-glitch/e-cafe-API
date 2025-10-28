"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemService = exports.ItemService = void 0;
// src/services/item.service.ts
const base_service_1 = require("./base.service");
class ItemService extends base_service_1.BaseService {
    constructor() {
        super("items");
    }
    async findByCategory(categoryId, shopId) {
        return await this.client.findMany({
            where: { category_id: categoryId, shop_id: shopId },
        });
    }
    async findByShop(shopId) {
        return await this.client.findMany({ where: { shop_id: shopId } });
    }
}
exports.ItemService = ItemService;
exports.itemService = new ItemService();
//# sourceMappingURL=items.service.js.map