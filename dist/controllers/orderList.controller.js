"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderListController = void 0;
const base_controller_1 = require("./base.controller");
const orderList_service_1 = require("@/services/orderList.service");
class OrderListController extends base_controller_1.BaseController {
    constructor() {
        super(orderList_service_1.orderListServices);
    }
}
exports.orderListController = new OrderListController();
//# sourceMappingURL=orderList.controller.js.map