import mongoose from "mongoose";

interface iUser {
    name?: string,
    email?: string,
    password?: string,
    tasks?: {}[],
    image?: string,
    imageID: string,
}

interface iUserData extends iUser, mongoose.Document { };

const userModel = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    image: {
        type: String,
    },
    imageID: {
        type: String,
    }
},
    {
        timestamps: true
    })

export const User = mongoose.model<iUserData>("User", userModel);