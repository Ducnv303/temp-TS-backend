import { Request, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleValidationError = (req: Request, res, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.error({ message: error.array()[0].msg || "" });
    }
    next();
};
