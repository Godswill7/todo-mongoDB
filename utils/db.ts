import mongoose from "mongoose";
import env from "dotenv";
env.config();

const URL = (process.env.DATABASE_STRING!);

export const db = () => {
  try {
    mongoose
      .connect(URL)
      .then(() => {
        console.log("connection has been established ⚡⚡⚡");
      })
      .catch((error: Error) => {
        console.log("unable to established connection : ", error);
      });
  } catch (error) {
    console.log(error);
  }
};
