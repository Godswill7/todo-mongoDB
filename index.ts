import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { db } from "./utils/db";
import env from "dotenv"
env.config()

const port = parseInt(process.env.PORT!);

const app: Application = express();
mainApp(app);

const Server = app.listen(port, () => {
    console.log(port)
    db()
});
 
process.on("uncaughtException", (error: Error) => {
    console.log("error due to uncaughtException",error)
    process.exit(1);
})
process.on("unhandleRejection", (reason: any) => {
    console.log("error due to unhandleRejection",reason)
    Server.close(() => {
        process.exit(1);
    });
});