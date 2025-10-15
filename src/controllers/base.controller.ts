import { Request, Response, NextFunction } from "express";
import { BaseService } from "../services/base.service";
import logger from "../utils/logger";
import { ResponsePayload } from "../utils/response";
import { AppError } from "../utils/appError";
import { Prisma } from "../generated/prisma";

export class BaseController<T extends BaseService<any>, CType, UType> {
  constructor(protected service: T) {}

  protected modelName = this.service.model;

  // Get all records
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findAll();
      const response = this.successResponse(
        data,
        `Fetched ${this.modelName} data successfully`
      );
      res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  // Get by ID
  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data = await this.service.findById(id);

      if (!data) {
        return next(new AppError(`${this.modelName} not found`, 404));
      }

      const response = this.successResponse(data, "Record fetched");
      res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  // Create record
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.create<CType>(req.body);
      const response = this.successResponse(data, "Record created");
      res.status(201).json(response);
    } catch (error) {
      console.log(typeof error);
      logger.error(error);
      next(error);
    }
  };

  // Update record
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data = await this.service.update<UType>(id, req.body);
      const response = this.successResponse(data, "Record updated");
      res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  // Delete record
  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.service.delete(id);
      const response = this.successResponse(
        null,
        "Record deleted successfully"
      );
      res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  // Success response helper
  protected successResponse = <T>(data: T, message: string) => {
    return ResponsePayload({
      success: true,
      error: false,
      data,
      message,
      details: null,
    });
  };
}
