import { AdminService } from "@app-services/service/AdminService";
import Container, { Inject, Service } from "typedi";

@Service()
export class AdminController {
    constructor(@Inject() private adminService: AdminService) { }

    async test(req, res) {
        try {
            console.log("123");
            const data = await this.adminService.testService();
            return res.success({
                data
            })
        } catch (error) {
            console.log(error);

            res.error(error)
        }
    }
}
