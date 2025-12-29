import { Request, Response, NextFunction } from "express";
import { AppError } from "../shared/errors/AppError";

export function errorHandler(error: Error, _req: Request, res: Response, _next: NextFunction){
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            message:error.message
        });
    }

    console.error("❌ Unexpected error:", error);

    return res.status(500).json({
        message: "Internal server error"
    });
}