"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = exports.deleteUser = exports.updateUser = exports.getAllUser = exports.getOneUser = exports.createUser = void 0;
const userModel_1 = require("../model/userModel");
const mainError_1 = require("../error/mainError");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const user = yield userModel_1.User.create({
            name,
            email,
            password,
        });
        return res.status(mainError_1.HTTP.CREATE).json({
            message: "user created successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error creating user",
            data: error.message
        });
    }
});
exports.createUser = createUser;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.User.findById(userID);
        return res.status(mainError_1.HTTP.OK).json({
            message: "user found successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error finding user",
            data: error.message
        });
    }
});
exports.getOneUser = getOneUser;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.User.find();
        return res.status(mainError_1.HTTP.OK).json({
            message: "All user found successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error finding all user",
            data: error.message
        });
    }
});
exports.getAllUser = getAllUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.body;
        const user = yield userModel_1.User.findByIdAndUpdate(userID);
        return res.status(mainError_1.HTTP.UPDATE).json({
            message: "user update successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error deleting user",
            data: error.message
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.body;
        const user = yield userModel_1.User.findByIdAndDelete(userID);
        return res.status(mainError_1.HTTP.DELETE).json({
            message: "user update successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error deleting user",
            data: error.message
        });
    }
});
exports.deleteUser = deleteUser;
//finish up
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.User.create({
            email,
            password,
        });
        return res.status(mainError_1.HTTP.CREATE).json({
            message: "user created successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error creating user",
            data: error.message
        });
    }
});
exports.signInUser = signInUser;
