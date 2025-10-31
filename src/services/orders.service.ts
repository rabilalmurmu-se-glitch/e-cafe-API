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
      const modOfPay = paymethod === "POSTPAID" ? "CASH" : null;
      const payment = await tex.payment.create({
        data: {
          order_id: order.order_id,
          status: "PENDING",
          amount: order.total_price,
          userId: orderList.user_id,
          payment_method: modOfPay,
        },
      });

      return { order, orderList, payment };
    });
  };

  updateOrder = async (payload: any) => {
    return await this.transaction(async (txt) => {
      const { orderStatus, orderId, transactionId, payment_method, allInfo } =
        payload;
      const order = await txt.orders.update({
        where: { order_id: orderId },
        data: {
          status: "ORDER PLACED",
        },
      });

      const orderPayment = await txt.payment.update({
        where: { order_id: orderId },
        data: {
          transaction_id: transactionId,
          payment_method,
          status: orderStatus,
          payment_info: allInfo,
        },
      });

      return { order, orderPayment };
    });
  };

  markOrderAsDelivered = async (payload: any) => {
    return await this.transaction(async (txt) => {
      const order = await txt.orders.update({
        where: { order_id: payload.orderId },
        data: { status: "DELIVERED" },
      });
      const pament = await txt.payment.update({
        where: { order_id: payload.orderId },
        data: { status: "captured" },
      });

      return { order, pament };
    });
  };
}

export const orderServices = new OrderService();
