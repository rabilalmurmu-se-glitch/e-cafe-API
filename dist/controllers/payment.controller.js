"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const listItems_service_1 = require("@/services/listItems.service");
const razorPay_1 = require("@/utils/razorPay");
const response_1 = require("@/utils/response");
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("@/config/config");
class PaymentController {
    async createAnOrder(req, res, netx) {
        try {
            const { orderListId } = req.body;
            const items = await listItems_service_1.listItemService.findByOrderList(orderListId);
            const total = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
            const option = {
                amount: total * 100,
                currency: "INR",
                receipt: "receipt_" + Date.now(),
            };
            const order = await (0, razorPay_1.createOrder)(option);
            const response = (0, response_1.ResponsePayload)({
                success: true,
                error: false,
                data: order,
                message: "Order created successfully",
                details: null,
            });
            res.status(200).json(response);
        }
        catch (error) {
            netx(error);
        }
    }
    async verifyPayment(req, res, next) {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
            const body = razorpay_order_id + "|" + razorpay_payment_id;
            const expectedSignature = crypto_1.default
                .createHmac("sha256", config_1.config.razorPay.key_secret)
                .update(body)
                .digest("hex");
            if (expectedSignature === razorpay_signature) {
                res.json({ success: true, message: "Payment verified successfully!" });
            }
            else {
                res.status(400).json({ success: false, message: "Invalid signature" });
            }
        }
        catch (error) {
            next(error);
        }
    }
}
exports.paymentController = new PaymentController();
//# sourceMappingURL=payment.controller.js.map