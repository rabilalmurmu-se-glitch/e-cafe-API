import { BaseService } from "./base.service";

class OrderListService extends BaseService<"orderList"> {
  constructor() {
    super("orderList");
  }
}

export const orderListServices = new OrderListService();
