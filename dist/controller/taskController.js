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
exports.deleteTask = exports.updateTask = exports.findAllTask = exports.findOneTask = exports.createTask = void 0;
const taskModel_1 = require("../model/taskModel");
// import { User } from "../model/userModel"
const mainError_1 = require("../error/mainError");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, dueDate, assignedTo } = req.body;
        const task = new taskModel_1.Task({
            title,
            description,
            dueDate,
            assignedTo,
            completed: false,
        });
        // task?.tasks.push(new mongoose.Types.ObjectId(task._id));
        task === null || task === void 0 ? void 0 : task.save();
        return res.status(mainError_1.HTTP.CREATE).json({
            message: "Task created",
            data: task,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(404).json({
            message: "Error creating task",
        });
    }
});
exports.createTask = createTask;
const findOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const findTask = yield taskModel_1.Task.findById(taskID);
        return res.status(mainError_1.HTTP.OK).json({
            message: "Task found",
            data: findTask,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error finding one task",
            data: error.message,
        });
    }
});
exports.findOneTask = findOneTask;
const findAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findTask = yield taskModel_1.Task.find();
        return res.status(mainError_1.HTTP.OK).json({
            message: "All Task found",
            data: findTask,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error finding all task",
            data: error.message
        });
    }
});
exports.findAllTask = findAllTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const { title, description, dueDate } = req.body;
        const findTask = yield taskModel_1.Task.findById(taskID);
        if (findTask) {
            const updateTask = yield taskModel_1.Task.findByIdAndUpdate({
                title,
                description,
                dueDate,
                // completed: true,
            });
        }
        else {
            return res.status(mainError_1.HTTP.BAD).json({
                message: "cannot find task"
            });
        }
        return res.status(mainError_1.HTTP.UPDATE).json({
            message: "Task updated successfully",
            data: exports.updateTask,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Error updating task",
            data: error.message
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const findTask = yield taskModel_1.Task.findByIdAndDelete(taskID);
        if (findTask) {
            yield taskModel_1.Task.findByIdAndDelete();
            return res.status(mainError_1.HTTP.DELETE).json({
                message: "Task deleted successfully",
            });
        }
        else {
            return res.status(mainError_1.HTTP.BAD).json({
                message: "task not found",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error deleting task",
        });
    }
});
exports.deleteTask = deleteTask;
