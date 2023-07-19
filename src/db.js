import mongoose from "mongoose";

const DATABASE = 'merndb'
const password = process.env.PASSWORD || 'px6Czt8PPTYGUwi1';
const MONGODB_URI = `mongodb+srv://Anderson0x07:${password}@clustertest.xzrg9bm.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    console.log("Attempt conection")
    await mongoose.connect(MONGODB_URI);
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error);
  }
};
