import { BaseService } from "./base.service";

class ShopService extends BaseService<"shop"> {
  constructor() {
    super("shop");
  }
}

export const shopServices = new ShopService();
