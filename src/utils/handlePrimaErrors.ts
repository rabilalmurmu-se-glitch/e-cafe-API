import { Prisma } from "../generated/prisma/client.js";

interface PrismaErrorResponse {
  status: number;
  message: string;
  details?: any;
}

export function handlePrismaError(
  error: unknown,
  debug = false
): PrismaErrorResponse {
  // Known request errors (constraint, relation, not found, etc.)
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const code = error.code;
    const meta = error.meta || {};

    switch (code) {
      case "P2002": // Unique constraint
        return {
          status: 409,
          message: `Duplicate entry — unique constraint failed on field(s): ${(
            meta.target as string[]
          )?.join(", ")}`,
        };
      case "P2003": // Foreign key constraint
        return {
          status: 400,
          message: `Foreign key constraint failed on field: ${meta.field_name}`,
        };
      case "P2014": // Invalid relation
        return {
          status: 400,
          message:
            "Invalid relation detected. The relation field value is incorrect.",
        };
      case "P2025": // Record not found
        return {
          status: 404,
          message: "Requested record not found.",
        };
      case "P2016": // Query interpretation error
      case "P2021": // Table does not exist
      case "P2022": // Column does not exist
        return {
          status: 400,
          message: `Database query error: ${error.message}`,
        };
      default:
        return {
          status: 400,
          message: `Unhandled Prisma error (${code}).`,
          details: debug ? error : undefined,
        };
    }
  }

  // Validation errors (invalid data shape)
  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      status: 400,
      message: "Invalid input. Please verify your request payload structure.",
      details: debug ? error.message : undefined,
    };
  }

  // Initialization errors (e.g., wrong credentials)
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 500,
      message:
        "Database connection failed. Check your Prisma configuration or database URL.",
      details: debug ? error.message : undefined,
    };
  }

  // Rust panic (internal Prisma engine crash)
  if (error instanceof Prisma.PrismaClientRustPanicError) {
    return {
      status: 500,
      message:
        "Critical database error. Please restart the server or try again later.",
    };
  }

  // Generic fallback
  return {
    status: 500,
    message: "An unexpected error occurred.",
    details: debug
      ? error instanceof Error
        ? error.message
        : error
      : undefined,
  };
}
