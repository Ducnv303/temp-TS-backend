

import express, { NextFunction, Response } from "express";
import { authentication } from "@app-middlewares/admin.middleware";
import { AdminController } from "@app-apis/controllers/AdminController";
import { Container } from "typedi";
import AdminValidator from "@app-apis/validator/AdminValidator";
import { handleValidationError } from "@app-middlewares/vadilator.middleware";

const router = express.Router();

const controller = Container.get(AdminController);

router.get("/", authentication, async (req, res: Response, next: NextFunction) => {
    return res.json({ service: "Admin" });
});

router.get(
    "/test",
    // authentication,
    AdminValidator.noValidator(),
    handleValidationError,
    controller.test
)

export default router;