import express, { Request, Response } from "express";
import { User } from "../model/userModel";
import { HTTP } from "../error/mainError";


export const createUser = async (req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
        })

        return res.status(HTTP.CREATE).json({
            message: "user created successfully",
            data: user
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error creating user",
            data: error.message

        })
    }
}

export const getOneUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params;


        const user = await User.findById(userID)

        return res.status(HTTP.OK).json({
            message: "user found successfully",
            data: user
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error finding user",
            data: error.message

        })
    }
}

export const getAllUser = async (req: Request, res: Response) => {
    try {

        const user = await User.find()

        return res.status(HTTP.OK).json({
            message: "All user found successfully",
            data: user
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error finding all user",
            data:error.message
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.body;

        const user = await User.findByIdAndUpdate(userID)

        return res.status(HTTP.UPDATE).json({
            message: "user update successfully",
            data: user,
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error deleting user",
            data:error.message
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.body;

        const user = await User.findByIdAndDelete(userID)

        return res.status(HTTP.DELETE).json({
            message: "user update successfully",
            data: user,
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error deleting user",
            data:error.message
        })
    }
}

//finish up
export const signInUser = async (req: Request, res: Response) => {
    try {

        const {email, password } = req.body;

        const user = await User.create({
            email,
            password,
        })

        return res.status(HTTP.CREATE).json({
            message: "user created successfully",
            data: user
        })

    } catch (error: any) {
        return res.status(HTTP.BAD).json({
            message: "Error creating user",
            data: error.message

        })
    }
}