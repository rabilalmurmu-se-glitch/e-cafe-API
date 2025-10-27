import { BaseService } from "./base.service";

class OrderService extends BaseService<"orders"> {
  constructor() {
    super("orders");
  }

  createOrder = async (paload: any) => {
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

  updateOrder = async (payload: any) => {
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

export const orderServices = new OrderService();
