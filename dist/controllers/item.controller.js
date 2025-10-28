"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemController = void 0;
const base_controller_1 = require("./base.controller");
const items_service_1 = require("@/services/items.service");
class ItemController extends base_controller_1.BaseController {
    constructor() {
        super(items_service_1.itemService);
        this.getByCategory = async (req, res) => {
            const { categoryId, shopId } = req.params;
            const data = await this.service.findByCategory(Number(categoryId), Number(shopId));
            res.status(200).json(data);
        };
    }
}
exports.itemController = new ItemController();
//# sourceMappingURL=item.controller.js.map