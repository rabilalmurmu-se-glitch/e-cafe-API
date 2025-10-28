"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const client_1 = require("@/generated/prisma/client");
const appError_1 = require("@/utils/appError"); // Your custom error class
const logger_1 = __importDefault(require("@/utils/logger")); // Optional but recommended
const prisma = new client_1.PrismaClient();
/**
 * Generic CRUD service helper
 * - Adds central Prisma error handling
 */
class BaseService {
    constructor(model, include = {}) {
        this.model = model;
        this.include = include;
    }
    get client() {
        return prisma[this.model];
    }
    handlePrismaError(error, operation) {
        // Prisma error type check
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            logger_1.default.error(`Prisma error during ${operation}: ${error.code} - ${error.message}`);
            switch (error.code) {
                case "P2002": // Unique constraint failed
                    throw new appError_1.AppError("Duplicate record. A unique constraint was violated.", 409);
                case "P2025": // Record not found
                    throw new appError_1.AppError("Record not found.", 404);
                case "P2003": // Foreign key constraint failed
                    throw new appError_1.AppError("Cannot delete or update record due to foreign key constraint.", 400);
                default:
                    throw new appError_1.AppError("Database operation failed.", 500);
            }
        }
        if (error instanceof client_1.Prisma.PrismaClientValidationError) {
            logger_1.default.error(`Validation error during ${operation}: ${error.message}`);
            throw new appError_1.AppError("Invalid data format for database operation.", 400);
        }
        if (error instanceof client_1.Prisma.PrismaClientInitializationError) {
            logger_1.default.error(`Database initialization error: ${error.message}`);
            throw new appError_1.AppError("Database connection failed.", 500);
        }
        if (error instanceof client_1.Prisma.PrismaClientRustPanicError) {
            logger_1.default.error(`Prisma Rust panic: ${error.message}`);
            throw new appError_1.AppError("Critical database error.", 500);
        }
        // Any unknown errors
        logger_1.default.error(`Unexpected error during ${operation}: ${String(error)}`);
        throw new appError_1.AppError("Unexpected database error.", 500);
    }
    async findAll(where = {}, include = this.include) {
        try {
            return await this.client?.findMany({ where, include });
        }
        catch (error) {
            this.handlePrismaError(error, "findAll");
        }
    }
    async findById(id, include = this.include) {
        try {
            return await this.client?.findUnique({
                where: { id: Number(id) },
                include,
            });
        }
        catch (error) {
            this.handlePrismaError(error, "findById");
        }
    }
    async create(data) {
        try {
            return await this.client?.create({ data });
        }
        catch (error) {
            this.handlePrismaError(error, "create");
        }
    }
    async update(id, data) {
        try {
            return await this.client?.update({ where: { id: Number(id) }, data });
        }
        catch (error) {
            this.handlePrismaError(error, "update");
        }
    }
    async delete(id) {
        try {
            return await this.client?.delete({ where: { id: Number(id) } });
        }
        catch (error) {
            this.handlePrismaError(error, "delete");
        }
    }
    // 🧩 Transaction support
    async transaction(callback) {
        try {
            return await prisma.$transaction(async (tx) => {
                //@ts-ignore
                return await callback(tx);
            });
        }
        catch (error) {
            this.handlePrismaError(error, "transaction");
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map