import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import logger from "../utils/logger";
import { createErrorResponse } from "../utils/apiError";
import { Prisma } from "../generated/prisma/index";
import { AppError } from "../utils/appError";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);

  if (err instanceof ZodError) {
    const details = err.errors.map((e) => ({
      path: e.path,
      message: e.message,
    }));
    return res
      .status(400)
      .json(
        createErrorResponse("Validation failed", "VALIDATION_ERROR", details)
      );
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    let message = "Database error";
    let code = "DATABASE_ERROR";

    if (err.code === "P2002") message = "Unique constraint failed";
    if (err.code === "P2025") message = "Record not found";

    return res
      .status(400)
      .json(createErrorResponse(message, `PRISMA_${err.code}`, null));
  }

  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json(createErrorResponse(err.message, "APP_ERROR", null));
  }

  const message = err instanceof Error ? err.message : "Internal Server Error";
  res
    .status(500)
    .json(createErrorResponse(message, "INTERNAL_SERVER_ERROR", null));
};
