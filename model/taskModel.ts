import mongoose from "mongoose";

interface iTask {
    title?: string,
    description?: string,
    dueDate?: string,
    // completed?: boolean,
    assignedTo?: string,
    // tasks?: {}[]
}

interface iTaskData extends iTask, mongoose.Document { };

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
    },
    // completed: {
    //   type: Boolean,
    //   default: false,
    // },
    assignedTo: {
      type: String,
    },
    // tasks: {
    //   type: [{}],
    // },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model<iTaskData>("Task", taskSchema);