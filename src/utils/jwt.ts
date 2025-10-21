import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { config } from "@/config/config";
import { AppError } from "./appError";

export const createAccessToken = <T extends object>(payload: T): string => {
  const { secret, expireIn } = config.jwt.access;
  const options: SignOptions = { expiresIn: expireIn };
  return jwt.sign(payload, secret, options);
};

export const verifyAccessToken = <T extends object = JwtPayload>(
  token: string
): T => {
  const { secret } = config.jwt.access;
  try {
    return jwt.verify(token, secret) as T;
  } catch (error: any) {
    throw new AppError(
      `Access token verification failed: ${error.message}`,
      400
    );
  }
};

export const createRefreshToken = <T extends object>(payload: T): string => {
  const { secret, expireIn } = config.jwt.refresh;
  const options: SignOptions = { expiresIn: expireIn };
  return jwt.sign(payload, secret, options);
};

export const verifyRefreshToken = <T extends object = JwtPayload>(
  token: string
): T => {
  const { secret } = config.jwt.refresh;
  try {
    return jwt.verify(token, secret) as T;
  } catch (error: any) {
    throw new AppError(
      `Refresh token verification failed: ${error.message}`,
      400
    );
  }
};
