import { LoginUserDto } from "../dtos/user.dto";
import { BaseService } from "./base.service";
declare class UserService extends BaseService<"users"> {
    constructor();
    login({ email, password }: LoginUserDto): Promise<any>;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map