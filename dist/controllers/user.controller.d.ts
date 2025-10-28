import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { userService } from "@/services/user.service";
import { CreateUserDto, UpdateUserDto } from "@/dtos/user.dto";
declare class UserController extends BaseController<typeof userService, CreateUserDto, UpdateUserDto> {
    constructor();
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    registration: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    refreshToken: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export declare const userController: UserController;
export {};
//# sourceMappingURL=user.controller.d.ts.map