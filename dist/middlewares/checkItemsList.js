"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkItemsList = void 0;
const orderList_service_1 = require("@/services/orderList.service");
const appError_1 = require("@/utils/appError");
const checkItemsList = async (req, res, next) => {
    try {
        let { userId, ...rest } = req.body;
        userId = userId || req.params.userId;
        // 🔹 1. Validate input
        if (!userId || isNaN(Number(userId))) {
            return next(new appError_1.AppError("A valid userId must be provided to get the order list.", 400));
        }
        const userIdNum = Number(userId);
        // 🔹 2. Fetch or create the user's order list
        let orderList = await orderList_service_1.orderListServices.getListByUser(userIdNum);
        if (!orderList) {
            orderList = await orderList_service_1.orderListServices.create({ user_id: userIdNum });
        }
        // 🔹 3. Safely attach order_list_id to the request body
        req.body = {
            ...rest,
            order_list_id: orderList.id,
        };
        return next();
    }
    catch (error) {
        console.error("❌ Error in checkItemsList middleware:", error);
        return next(new appError_1.AppError(error instanceof Error
            ? error.message
            : "Failed to process the order list.", 500));
    }
};
exports.checkItemsList = checkItemsList;
//# sourceMappingURL=checkItemsList.js.map