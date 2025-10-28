"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const base_controller_1 = require("./base.controller");
const category_service_1 = require("@/services/category.service");
class CategoryController extends base_controller_1.BaseController {
    constructor() {
        super(category_service_1.categoryService);
        this.getByShop = async (req, res) => {
            const { shopId } = req.params;
            const data = await this.service.findByShop(Number(shopId));
            res.status(200).json(data);
        };
    }
}
exports.categoryController = new CategoryController();
//# sourceMappingURL=cagetory.controller.js.map