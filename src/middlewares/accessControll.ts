// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "@/utils/jwt";
import { AppError } from "@/utils/appError";

// Extend Express Request type to include `user`
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
    order?: any;
  }
}

export const AccessControl =
  (allowed: string[]) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      let decoded;
      const url: string = req.url.split("/").pop() as string;
      if (["login", "registration"].includes(url)) return next();

      if (!authHeader?.startsWith("Bearer ")) {
        return next(
          new AppError("Unauthorized: Missing or invalid token", 401)
        );
      }

      const token = authHeader.split(" ")[1];
      decoded = verifyAccessToken(token as string);

      if (!decoded || typeof decoded !== "object" || !("role" in decoded)) {
        return next(new AppError("Invalid token payload", 401));
      }

      if (!allowed.includes(decoded.role)) {
        return next(
          new AppError("You are not allowed to access this resource", 403)
        );
      }

      req.user = decoded;
      next();
    } catch (error) {
      next(new AppError("Unauthorized: Invalid or expired token", 401));
    }
  };
