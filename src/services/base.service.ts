// src/services/base.service.ts
import { PrismaClient } from "../generated/prisma/client";
const prisma = new PrismaClient();

/**
 * Generic CRUD service helper
 * - Simplifies model-specific services
 */
export class BaseService<T extends keyof PrismaClient> {
  constructor(private readonly model: T) {}

  get client() {
    return prisma[this.model] as any;
  }

  async findAll(where = {}, include = {}) {
    return await this.client?.findMany({ where, include });
  }

  async findById(id: number | string, include = {}) {
    return await this.client?.findUnique({
      where: { id: Number(id) },
      include,
    });
  }

  async create(data: any) {
    return await this.client?.create({ data });
  }

  async update(id: number | string, data: any) {
    return await this.client?.update({ where: { id: Number(id) }, data });
  }

  async delete(id: number | string) {
    return await this.client?.delete({ where: { id: Number(id) } });
  }
}
