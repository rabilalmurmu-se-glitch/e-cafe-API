"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const logger_1 = __importDefault(require("@/utils/logger"));
const response_1 = require("@/utils/response");
const appError_1 = require("@/utils/appError");
class BaseController {
    constructor(service) {
        this.service = service;
        this.modelName = this.service.model;
        // Get all records
        this.getAll = async (req, res, next) => {
            try {
                const data = await this.service.findAll();
                const response = this.successResponse(data, `Fetched ${this.modelName} data successfully`);
                res.status(200).json(response);
            }
            catch (error) {
                logger_1.default.error(error);
                next(error);
            }
        };
        // Get by ID
        this.getById = async (req, res, next) => {
            try {
                const id = Number(req.params.id);
                const data = await this.service.findById(id);
                if (!data) {
                    return next(new appError_1.AppError(`${this.modelName} not found`, 404));
                }
                const response = this.successResponse(data, "Record fetched");
                res.status(200).json(response);
            }
            catch (error) {
                logger_1.default.error(error);
                next(error);
            }
        };
        // Create record
        this.create = async (req, res, next) => {
            try {
                const data = await this.service.create(req.body);
                const response = this.successResponse(data, "Record created");
                res.status(201).json(response);
            }
            catch (error) {
                console.log(typeof error);
                logger_1.default.error(error);
                next(error);
            }
        };
        // Update record
        this.update = async (req, res, next) => {
            try {
                const id = Number(req.params.id);
                const data = await this.service.update(id, req.body);
                const response = this.successResponse(data, "Record updated");
                res.status(200).json(response);
            }
            catch (error) {
                logger_1.default.error(error);
                next(error);
            }
        };
        // Delete record
        this.remove = async (req, res, next) => {
            try {
                const id = Number(req.params.id);
                await this.service.delete(id);
                const response = this.successResponse(null, "Record deleted successfully");
                res.status(200).json(response);
            }
            catch (error) {
                logger_1.default.error(error);
                next(error);
            }
        };
        // Success response helper
        this.successResponse = (data, message) => {
            return (0, response_1.ResponsePayload)({
                success: true,
                error: false,
                data,
                message,
                details: null,
            });
        };
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map