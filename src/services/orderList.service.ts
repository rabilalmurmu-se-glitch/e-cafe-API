import { BaseService } from "./base.service";

class OrderListService extends BaseService<"orderList"> {
  constructor() {
    super("orderList");
  }

  getListByUser = async (userId: number) => {
    return await this.client.findFirst({
      where: {
        user_id: userId,
        status: "CREATED",
      },
    });
  };
}

export const orderListServices = new OrderListService();
