import mongoose from "mongoose";
import { PASSWORD } from "./var.js";

const DATABASE = 'merndb'
const MONGODB_URI = `mongodb+srv://Anderson0x07:anderson0x07@clustertest.xzrg9bm.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    console.log("Attempt conection")
    await mongoose.connect(MONGODB_URI);
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error);
  }
};
