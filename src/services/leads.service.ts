import { BaseService } from "./base.service";



class LeadsService extends BaseService<"leads">{
    constructor() {
        super("leads");
    }
}

export const leadsService = new LeadsService();