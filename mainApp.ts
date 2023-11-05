import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
import task from "./Router/taskRouter"
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/errorHandler";

export const mainApp = ((app:Application)=>{
    

    app.use(cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }))
    app.use(express.json())
    
    app.use("/api",task)
    
    app.get("/", (req:Request,res:Response) => {
        try {
            return res.status(HTTP.OK).json({
                message:"Welcome Home"
            })
        } catch (error) {
            return res.status(HTTP.BAD).json({
                message:"Error getting Home"
            })
        }
    })
    
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
        next(
            new mainError({
                name: "Router Error",
                message: `This error is coming up because the  URL isn't correct`,
                status: HTTP.BAD,
                success: false,
            })
        );
    });
    app.use(errorHandler);
})