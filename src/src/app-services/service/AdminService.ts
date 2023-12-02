import { appLogger } from "@app-helpers";
import { IAdminService } from "@app-services/interface/IAdminService";
import { Service } from 'typedi'

@Service()
export class AdminService implements IAdminService {
    constructor(){}
    async testService(): Promise<any> {
        try {
            return "test service"
        } catch (error) {
            appLogger.error(error);
        }
    }
}