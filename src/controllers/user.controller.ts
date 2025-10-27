// src/controllers/user.controller.ts
import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { userService } from "@/services/user.service";
import logger from "@/utils/logger";
import { CreateUserDto, UpdateUserDto } from "@/dtos/user.dto";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "@/utils/jwt";
import { AppError } from "@/utils/appError";

class UserController extends BaseController<
  typeof userService,
  CreateUserDto,
  UpdateUserDto
> {
  constructor() {
    super(userService);
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const login = req.body;
      const user = await this.service.login({
        email: login.email,
        password: login.password,
      });
      if (!user) {
        throw new AppError("Invalid email or password.", 401);
      }
      const { password, ...userData } = user;
      const tokenPayload = { userName: user?.name, role: user?.type };
      const accessToken = createAccessToken<typeof tokenPayload>(tokenPayload);
      const refreshToken =
        createRefreshToken<typeof tokenPayload>(tokenPayload);
      const response = this.successResponse(userData, "Login successfull!");
      res.setHeader("access-token", accessToken);
      res.setHeader("x-access-token", refreshToken);
      res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const newUser = await this.service.create<CreateUserDto>(
        payload as CreateUserDto
      );
      const response = this.successResponse(
        newUser,
        "User registration successfull"
      );
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken =
        req.body.refreshToken || req.headers["x-refresh-token"];
      const decodedToken = verifyRefreshToken(refreshToken);
      let msg = "Access token updated not succfull";
      if (decodedToken) {
        const newAccessToken = createAccessToken(decodedToken);
        res.setHeader("access-token", newAccessToken);
        msg = "Access token updated succfully";
      }
      const response = this.successResponse({}, msg);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();
