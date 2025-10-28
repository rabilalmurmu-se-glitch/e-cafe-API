"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopController = void 0;
const base_controller_1 = require("./base.controller");
const shop_service_1 = require("@/services/shop.service");
class ShopController extends base_controller_1.BaseController {
    constructor() {
        super(shop_service_1.shopServices);
    }
}
exports.shopController = new ShopController();
//# sourceMappingURL=shop.controller.js.map