import mongoose from "mongoose";
const url = process.env.MONGO_URI;

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const conn = await mongoose.connect(url);
    isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
