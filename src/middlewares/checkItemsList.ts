import { orderListServices } from "@/services/orderList.service";
import { AppError } from "@/utils/appError";
import { NextFunction, Request, Response } from "express";

export const checkItemsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { userId, ...rest } = req.body;
    userId = userId || req.params.userId;

    // 🔹 1. Validate input
    if (!userId || isNaN(Number(userId))) {
      return next(
        new AppError(
          "A valid userId must be provided to get the order list.",
          400
        )
      );
    }

    const userIdNum = Number(userId);

    // 🔹 2. Fetch or create the user's order list
    let orderList = await orderListServices.getListByUser(userIdNum);

    if (!orderList) {
      orderList = await orderListServices.create({ user_id: userIdNum });
    }

    // 🔹 3. Safely attach order_list_id to the request body
    req.body = {
      ...rest,
      order_list_id: orderList.id,
    };

    return next();
  } catch (error) {
    console.error("❌ Error in checkItemsList middleware:", error);
    return next(
      new AppError(
        error instanceof Error
          ? error.message
          : "Failed to process the order list.",
        500
      )
    );
  }
};
