"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payment_controller_1 = require("@/controllers/payment.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/create-order", payment_controller_1.paymentController.createAnOrder);
router.post("/verify", payment_controller_1.paymentController.verifyPayment);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map