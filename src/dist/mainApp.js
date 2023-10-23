"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./Router/taskRouter"));
const mainError_1 = require("./error/mainError");
const errorHandler_1 = require("./error/errorHandler");
exports.mainApp = ((app) => {
    app.use((0, cors_1.default)({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }));
    app.use(express_1.default.json());
    // app.use("/api/",user)
    app.use("/api", taskRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(mainError_1.HTTP.OK).json({
                message: "Welcome Home"
            });
        }
        catch (error) {
            return res.status(mainError_1.HTTP.BAD).json({
                message: "Error getting Home"
            });
        }
    });
    app.all("*", (req, res, next) => {
        next(new mainError_1.mainError({
            name: "Router Error",
            message: `This error is coming up because the  URL isn't correct`,
            status: mainError_1.HTTP.BAD,
            success: false,
        }));
    });
    app.use(errorHandler_1.errorHandler);
});
