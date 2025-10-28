"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const base_controller_1 = require("./base.controller");
const orders_service_1 = require("@/services/orders.service");
const appError_1 = require("@/utils/appError");
const listItems_service_1 = require("@/services/listItems.service");
class OrderController extends base_controller_1.BaseController {
    constructor() {
        super(orders_service_1.orderServices);
        this.createOrder = async (req, res, next) => {
            try {
                const { user_id, orderListId, modOfPay } = req.body;
                if (!user_id || !orderListId)
                    throw new appError_1.AppError("Please provide user_id and orderListId", 400);
                const items = await listItems_service_1.listItemService.findByOrderList(orderListId);
                const total = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
                const isPostpaid = modOfPay === "POSTPAID" ? true : false;
                const orderId = `ORD@tcafe${Date.now()}`;
                const payload = {
                    order_id: orderId,
                    order_list_id: orderListId,
                    user_id,
                    total_price: total,
                    status: isPostpaid ? "ORDER PLACED" : "PENDING",
                    paymethod: modOfPay,
                };
                const result = await orders_service_1.orderServices.createOrder(payload);
                if (isPostpaid) {
                    const response = this.successResponse(result, "Order Placed");
                    return res.status(200).json(response);
                }
                req.order = result;
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.orderController = new OrderController();
//# sourceMappingURL=order.controller.js.map