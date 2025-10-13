import { BaseService } from "./base.service";

class UserService extends BaseService<"users"> {
  constructor() {
    super("users");
  }
}

export const userService = new UserService();
