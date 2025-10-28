"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listItemService = exports.ListItemService = void 0;
// src/services/listItem.service.ts
const base_service_1 = require("./base.service");
class ListItemService extends base_service_1.BaseService {
    constructor() {
        super("listItems");
    }
    async findByOrderList(orderListId) {
        return await this.client.findMany({
            where: { order_list_id: orderListId },
            include: { item: true },
        });
    }
}
exports.ListItemService = ListItemService;
exports.listItemService = new ListItemService();
//# sourceMappingURL=listItems.service.js.map