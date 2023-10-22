"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./../controller/userController");
const router = express_1.default.Router();
router.route("/create-user").post(userController_1.createUser);
router.route("/get-all-users").get(userController_1.getAllUser);
router.route("/:userID/get-one-user").get(userController_1.getOneUser);
router.route("/:userID/delete-user").delete(userController_1.deleteUser);
router.route("/:userID/delete").patch(userController_1.updateUser);
exports.default = router;
