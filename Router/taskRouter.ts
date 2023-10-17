import express from "express"
import { createTask, deleteTask, findAllTask, findOneTask, updateTask } from "../controller/taskController";

const router = express.Router()

router.route("/create-task").post(createTask)
router.route("/:taskID/get-one").get(findOneTask)
router.route("/get-all").get(findAllTask)
router.route("/:taskID/delete").delete(deleteTask)
router.route("/:taskID/update").patch(updateTask)

export default router