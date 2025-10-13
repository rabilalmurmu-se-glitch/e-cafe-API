// src/services/listItem.service.ts
import { BaseService } from "./base.service";

export class ListItemService extends BaseService<"listItems"> {
  constructor() {
    super("listItems");
  }

  async findByOrderList(orderListId: number) {
    return await this.client.findMany({
      where: { order_list_id: orderListId },
      include: { item: true },
    });
  }
}

export const listItemService = new ListItemService();
