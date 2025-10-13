import { BaseService } from "./base.service";

class OrderService extends BaseService<"orders"> {
  constructor() {
    super("orders");
  }
}

export const orderServices = new OrderService();
