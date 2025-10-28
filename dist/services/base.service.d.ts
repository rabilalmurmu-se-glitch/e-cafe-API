import { PrismaClient } from "@/generated/prisma/client";
/**
 * Generic CRUD service helper
 * - Adds central Prisma error handling
 */
export declare class BaseService<T extends keyof PrismaClient> {
    readonly model: T;
    private include;
    constructor(model: T, include?: any);
    get client(): any;
    protected handlePrismaError(error: unknown, operation: string): void;
    findAll(where?: {}, include?: any): Promise<any>;
    findById(id: number | string, include?: any): Promise<any>;
    create<T>(data: T): Promise<any>;
    update<T>(id: number | string, data: T): Promise<any>;
    delete(id: number | string): Promise<any>;
    transaction<T>(callback: (tx: Omit<PrismaClient, "$connect" | "$disconnect">) => Promise<T>): Promise<T | undefined>;
}
//# sourceMappingURL=base.service.d.ts.map