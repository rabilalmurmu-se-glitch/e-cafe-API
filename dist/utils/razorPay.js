"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.rozorPay = void 0;
const config_1 = require("@/config/config");
const razorpay_1 = __importDefault(require("razorpay"));
exports.rozorPay = new razorpay_1.default({
    key_id: config_1.config.razorPay.key_id,
    key_secret: config_1.config.razorPay.key_secret,
});
const createOrder = async (option) => {
    return await exports.rozorPay.orders.create(option);
};
exports.createOrder = createOrder;
//# sourceMappingURL=razorPay.js.map