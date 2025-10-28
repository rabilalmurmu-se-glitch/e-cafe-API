import { Request, Response, NextFunction } from "express";
declare module "express-serve-static-core" {
    interface Request {
        user?: any;
        order?: any;
    }
}
export declare const AccessControl: (allowed: string[]) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=accessControll.d.ts.map