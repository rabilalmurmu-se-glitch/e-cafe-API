// src/controllers/base.controller.ts
import { Request, Response } from "express";
import { BaseService } from "../services/base.service";
import logger from "../utils/logger";

export class BaseController<T extends BaseService<any>> {
  constructor(protected service: T) {}

  async getAll(req: Request, res: Response) {
    try {
      const data = await this.service.findAll();
      res.status(200).json(data);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Failed to fetch records" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await this.service.findById(id);
      if (!data) return res.status(404).json({ message: "Record not found" });
      res.status(200).json(data);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Failed to fetch record" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await this.service.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Failed to create record" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await this.service.update(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Failed to update record" });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await this.service.delete(id);
      res.status(204).end();
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Failed to delete record" });
    }
  }
}
