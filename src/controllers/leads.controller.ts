import { leadsService } from "@/services/leads.service";
import { BaseController } from "./base.controller";
import { CreateLeadDto, UpdateLeadDto } from "@/dtos/leads.dto";

class LeadsController extends BaseController<
  typeof leadsService,
  CreateLeadDto,
  UpdateLeadDto
> {
  constructor() {
    super(leadsService);
  }
}

export const leadsController = new LeadsController();
