import { JwtPayload } from "jsonwebtoken";
export declare const createAccessToken: <T extends object>(payload: T) => string;
export declare const verifyAccessToken: <T extends object = JwtPayload>(token: string) => T;
export declare const createRefreshToken: <T extends object>(payload: T) => string;
export declare const verifyRefreshToken: <T extends object = JwtPayload>(token: string) => T;
//# sourceMappingURL=jwt.d.ts.map