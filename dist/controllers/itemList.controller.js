"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listItemController = void 0;
const base_controller_1 = require("./base.controller");
const listItems_service_1 = require("@/services/listItems.service");
class ListItemController extends base_controller_1.BaseController {
    constructor() {
        super(listItems_service_1.listItemService);
        this.getItemsByListId = async (req, res, next) => {
            try {
                const { order_list_id } = req.body;
                const data = await this.service.findByOrderList(Number(order_list_id));
                const response = this.successResponse(data, "Fetch all items successfully");
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.listItemController = new ListItemController();
//# sourceMappingURL=itemList.controller.js.map