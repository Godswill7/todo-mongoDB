import express from "express"
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from './../controller/userController';

const router = express.Router()

router.route("/create-user").post(createUser)
router.route("/get-all-users").get(getAllUser)
router.route("/:userID/get-one-user").get(getOneUser)
router.route("/:userID/delete-user").delete(deleteUser)
router.route("/:userID/delete").patch(updateUser)

export default router