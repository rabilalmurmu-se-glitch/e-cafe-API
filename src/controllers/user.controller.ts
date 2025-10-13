// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { userService } from "../services/user.service";

class UserController extends BaseController<typeof userService> {
  constructor() {
    super(userService);
  }
}

export const userController = new UserController();
