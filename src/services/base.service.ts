import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { AppError } from "@/utils/appError"; // Your custom error class
import logger from "@/utils/logger"; // Optional but recommended

const prisma = new PrismaClient();

/**
 * Generic CRUD service helper
 * - Adds central Prisma error handling
 */
export class BaseService<T extends keyof PrismaClient> {
  private include: any;
  constructor(readonly model: T, include: any = {}) {
    this.include = include;
  }

  get client() {
    return prisma[this.model] as any;
  }

  protected handlePrismaError(error: unknown, operation: string) {
    // Prisma error type check
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      logger.error(
        `Prisma error during ${operation}: ${error.code} - ${error.message}`
      );

      switch (error.code) {
        case "P2002": // Unique constraint failed
          throw new AppError(
            "Duplicate record. A unique constraint was violated.",
            409
          );
        case "P2025": // Record not found
          throw new AppError("Record not found.", 404);
        case "P2003": // Foreign key constraint failed
          throw new AppError(
            "Cannot delete or update record due to foreign key constraint.",
            400
          );
        default:
          throw new AppError("Database operation failed.", 500);
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      logger.error(`Validation error during ${operation}: ${error.message}`);
      throw new AppError("Invalid data format for database operation.", 400);
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      logger.error(`Database initialization error: ${error.message}`);
      throw new AppError("Database connection failed.", 500);
    }

    if (error instanceof Prisma.PrismaClientRustPanicError) {
      logger.error(`Prisma Rust panic: ${error.message}`);
      throw new AppError("Critical database error.", 500);
    }

    // Any unknown errors
    logger.error(`Unexpected error during ${operation}: ${String(error)}`);
    throw new AppError("Unexpected database error.", 500);
  }

  async findAll(where = {}, include = this.include) {
    try {
      return await this.client?.findMany({ where, include });
    } catch (error) {
      this.handlePrismaError(error, "findAll");
    }
  }

  async findById(id: number | string, include = this.include) {
    try {
      return await this.client?.findUnique({
        where: { id: Number(id) },
        include,
      });
    } catch (error) {
      this.handlePrismaError(error, "findById");
    }
  }

  async create<T>(data: T) {
    try {
      return await this.client?.create({ data });
    } catch (error) {
      this.handlePrismaError(error, "create");
    }
  }

  async update<T>(id: number | string, data: T) {
    try {
      return await this.client?.update({ where: { id: Number(id) }, data });
    } catch (error) {
      this.handlePrismaError(error, "update");
    }
  }

  async delete(id: number | string) {
    try {
      return await this.client?.delete({ where: { id: Number(id) } });
    } catch (error) {
      this.handlePrismaError(error, "delete");
    }
  }

  // 🧩 Transaction support
  async transaction<T>(
    callback: (tx: Omit<PrismaClient, "$connect" | "$disconnect">) => Promise<T>
  ) {
    try {
      return await prisma.$transaction(async (tx) => {
        //@ts-ignore
        return await callback(tx);
      });
    } catch (error) {
      this.handlePrismaError(error, "transaction");
    }
  }
}
