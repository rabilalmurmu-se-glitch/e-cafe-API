import { paymentController } from "@/controllers/payment.controller";
import { Router } from "express";

const router = Router();

router.post("/create-order", paymentController.createAnOrder);
router.post("/verify", paymentController.verifyPayment);

export default router;
