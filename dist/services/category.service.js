"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = exports.CategoryService = void 0;
// src/services/category.service.ts
const base_service_1 = require("./base.service");
class CategoryService extends base_service_1.BaseService {
    constructor() {
        super("categories");
    }
    async findByShop(shopId) {
        return await this.client.findMany({ where: { shop_id: shopId } });
    }
    async findByType(typeId) {
        return await this.client.findMany({ where: { type_id: typeId } });
    }
}
exports.CategoryService = CategoryService;
exports.categoryService = new CategoryService();
//# sourceMappingURL=category.service.js.map