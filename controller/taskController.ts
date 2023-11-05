import { Request, Response } from "express";
import { Task } from "../model/taskModel";
import { HTTP } from "../error/mainError";
import mongoose from "mongoose"

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, assignedTo } = req.body;

    const task = new Task({
      title,
      description,
      dueDate,
      assignedTo,
    });
    
      return res.status(HTTP.CREATE).json({
      message: "Task created",
      data: task,
    });
  } catch (error: any) {
    console.log(error.message)
    return res.status(404).json({
      message: "Error creating task",
    });
  }
};

export const findOneTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;

    const findTask = await Task.findById(taskID);

    return res.status(HTTP.OK).json({
      message: "Task found",
      data: findTask,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding one task",
      data: error.message,
    });
  }
};

export const findAllTask = async (req: Request, res: Response) => {
  try {
    const findTask = await Task.find();
    return res.status(HTTP.OK).json({
      message: "All Task found",
      data: findTask,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Error finding all task",
      data:error.message
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;

    const { title, description, dueDate } = req.body;

    const findTask = await Task.findById(taskID);

    if (findTask) {
      const updateTask = await Task.findByIdAndUpdate(
      taskID,
        {
          title,
          description,
          dueDate,
          // completed: true,
        },
        {
          new: true,
        }
      );
        
return res.status(HTTP.UPDATE).json({
  message: "Task updated successfully",
  data: updateTask,
});

    } else {
      return res.status(HTTP.BAD).json({
        message:"cannot find task"
      })
    }
  } catch (error: any) {
    console.log(error.message)
    return res.status(HTTP.BAD).json({
      message: "Error updating task",
      data:error.message
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;

    const findTask = await Task.findByIdAndDelete(taskID);

    if (findTask) {
      await Task.findByIdAndDelete();
      return res.status(HTTP.DELETE).json({
        message: "Task deleted successfully",
      });
    } else {
      return res.status(HTTP.BAD).json({
        message: "task not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error deleting task",
    });
  }
};
