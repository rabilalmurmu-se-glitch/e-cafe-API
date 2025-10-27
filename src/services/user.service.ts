import { LoginUserDto } from "../dtos/user.dto";
import { BaseService } from "./base.service";

class UserService extends BaseService<"users"> {
  constructor() {
    super("users");
  }
  async login({ email, password }: LoginUserDto) {
    try {
      return await this.client.findFirst({
        where: { email, password },
      });
    } catch (error) {
      this.handlePrismaError(error, "login");
    }
  }
}

export const userService = new UserService();
