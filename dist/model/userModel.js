"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
const userModel = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    tasks: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Task"
        }],
    image: {
        type: String,
    },
    imageID: {
        type: String,
    }
}, {
    timestamps: true
});
exports.User = mongoose_1.default.model("User", userModel);
