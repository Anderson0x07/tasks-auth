import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Attempt conection")
    await mongoose.connect("mongodb://127.0.0.1/merndb");
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error);
  }
};
