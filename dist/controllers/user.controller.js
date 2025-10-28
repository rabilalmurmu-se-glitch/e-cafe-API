"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const base_controller_1 = require("./base.controller");
const user_service_1 = require("@/services/user.service");
const logger_1 = __importDefault(require("@/utils/logger"));
const jwt_1 = require("@/utils/jwt");
const appError_1 = require("@/utils/appError");
class UserController extends base_controller_1.BaseController {
    constructor() {
        super(user_service_1.userService);
        this.login = async (req, res, next) => {
            try {
                const login = req.body;
                const user = await this.service.login({
                    email: login.email,
                    password: login.password,
                });
                if (!user) {
                    throw new appError_1.AppError("Invalid email or password.", 401);
                }
                const { password, ...userData } = user;
                const tokenPayload = { userName: user?.name, role: user?.type };
                const accessToken = (0, jwt_1.createAccessToken)(tokenPayload);
                const refreshToken = (0, jwt_1.createRefreshToken)(tokenPayload);
                const response = this.successResponse(userData, "Login successfull!");
                res.setHeader("access-token", accessToken);
                res.setHeader("x-access-token", refreshToken);
                res.status(200).json(response);
            }
            catch (error) {
                logger_1.default.error(error);
                next(error);
            }
        };
        this.registration = async (req, res, next) => {
            try {
                const payload = req.body;
                const newUser = await this.service.create(payload);
                const response = this.successResponse(newUser, "User registration successfull");
                res.status(201).json(response);
            }
            catch (error) {
                next(error);
            }
        };
        this.refreshToken = async (req, res, next) => {
            try {
                const refreshToken = req.body.refreshToken || req.headers["x-refresh-token"];
                const decodedToken = (0, jwt_1.verifyRefreshToken)(refreshToken);
                let msg = "Access token updated not succfull";
                if (decodedToken) {
                    const newAccessToken = (0, jwt_1.createAccessToken)(decodedToken);
                    res.setHeader("access-token", newAccessToken);
                    msg = "Access token updated succfully";
                }
                const response = this.successResponse({}, msg);
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map