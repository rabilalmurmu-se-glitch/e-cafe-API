"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const logger_1 = __importDefault(require("@/utils/logger"));
const apiError_1 = require("@/utils/apiError");
const index_1 = require("@/generated/prisma/index");
const appError_1 = require("@/utils/appError");
const errorHandler = (err, req, res, next) => {
    logger_1.default.error(err);
    if (err instanceof zod_1.ZodError) {
        const details = err.issues.map((e) => ({
            path: e.path,
            message: e.message,
        }));
        return res
            .status(400)
            .json((0, apiError_1.createErrorResponse)("Validation failed", "VALIDATION_ERROR", details));
    }
    if (err instanceof index_1.Prisma.PrismaClientKnownRequestError) {
        let message = "Database error";
        let code = "DATABASE_ERROR";
        if (err.code === "P2002")
            message = "Unique constraint failed";
        if (err.code === "P2025")
            message = "Record not found";
        return res
            .status(400)
            .json((0, apiError_1.createErrorResponse)(message, `PRISMA_${err.code}`, null));
    }
    if (err instanceof appError_1.AppError) {
        return res
            .status(err.statusCode)
            .json((0, apiError_1.createErrorResponse)(err.message, "APP_ERROR", null));
    }
    const message = err instanceof Error ? err.message : "Internal Server Error";
    res
        .status(500)
        .json((0, apiError_1.createErrorResponse)(message, "INTERNAL_SERVER_ERROR", null));
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorResponseHandler.js.map