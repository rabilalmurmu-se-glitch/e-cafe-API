import { z } from "zod";
import { Request, Response, NextFunction } from "express";
export declare const validate: (schema: z.ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateRequest.d.ts.map