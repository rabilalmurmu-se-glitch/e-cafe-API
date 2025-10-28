"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderListServices = void 0;
const base_service_1 = require("./base.service");
class OrderListService extends base_service_1.BaseService {
    constructor() {
        super("orderList");
        this.getListByUser = async (userId) => {
            return await this.client.findFirst({
                where: {
                    user_id: userId,
                    status: "CREATED",
                },
            });
        };
    }
}
exports.orderListServices = new OrderListService();
//# sourceMappingURL=orderList.service.js.map