"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const db_1 = require("./utils/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT);
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const Server = app.listen(port, () => {
    console.log();
    (0, db_1.db)();
    console.log("", port);
});
process.on("uncaughtException", (error) => {
    console.log("error due to uncaughtException", error);
    process.exit(1);
});
process.on("unhandleRejection", (reason) => {
    console.log("error due to unhandleRejection", reason);
    Server.close(() => {
        process.exit(1);
    });
});