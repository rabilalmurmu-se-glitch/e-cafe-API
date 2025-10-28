"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shop_routes_1 = __importDefault(require("./shop.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const types_routes_1 = __importDefault(require("./types.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const item_routes_1 = __importDefault(require("./item.routes"));
const orderList_routes_1 = __importDefault(require("./orderList.routes"));
const listItem_routes_1 = __importDefault(require("./listItem.routes"));
const order_routes_1 = __importDefault(require("./order.routes"));
const payment_routes_1 = __importDefault(require("./payment.routes"));
const router = (0, express_1.Router)();
router.use("/shops", shop_routes_1.default);
router.use("/users", user_routes_1.default);
router.use("/types", types_routes_1.default);
router.use("/categories", category_routes_1.default);
router.use("/items", item_routes_1.default);
router.use("/order-lists", orderList_routes_1.default);
router.use("/list-items", listItem_routes_1.default);
router.use("/orders", order_routes_1.default);
router.use("/payment", payment_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map