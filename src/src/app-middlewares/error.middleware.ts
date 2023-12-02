import { NextFunction, Request, Response } from "express";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    const errorCode = error.status || 500;
    const message = error.message || "Something went wrong";
    return res.status(500).json({
        message,
        errorCode,
    });
}
