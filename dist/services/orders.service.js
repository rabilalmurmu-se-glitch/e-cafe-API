"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const base_service_1 = require("./base.service");
class OrderService extends base_service_1.BaseService {
    constructor() {
        super("orders");
        this.createOrder = async (paload) => {
            return await this.transaction(async (tex) => {
                const { paymethod, ...orderPaload } = paload;
                const order = await tex.orders.create({
                    data: orderPaload,
                });
                const orderList = await tex.orderList.update({
                    where: { id: order.order_list_id },
                    data: {
                        status: "ORDERED",
                    },
                });
                const payment = await tex.payment.create({
                    data: {
                        order_id: order.order_id,
                        status: "PENDING",
                        amount: order.total_price,
                        userId: orderList.user_id,
                    },
                });
                return { order, orderList, payment };
            });
        };
        this.updateOrder = async (payload) => {
            return await this.transaction(async (txt) => {
                const { orderStatus, orderId, transactionId, payment_method } = payload;
                const order = await txt.orders.update({
                    where: { order_id: orderId },
                    data: {
                        status: orderStatus,
                    },
                });
                const orderPayment = await txt.payment.update({
                    where: { order_id: orderId },
                    data: {
                        transaction_id: transactionId,
                        payment_method,
                    },
                });
            });
        };
    }
}
exports.orderServices = new OrderService();
//# sourceMappingURL=orders.service.js.map