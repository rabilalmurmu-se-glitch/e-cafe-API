import { Request, Response, NextFunction } from "express";
import { BaseService } from "@/services/base.service";
export declare class BaseController<T extends BaseService<any>, CType, UType> {
    protected service: T;
    constructor(service: T);
    protected modelName: any;
    getAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    remove: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    protected successResponse: <T_1>(data: T_1, message: string) => import("@/utils/response").ResponseProps;
}
//# sourceMappingURL=base.controller.d.ts.map