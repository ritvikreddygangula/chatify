import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};
