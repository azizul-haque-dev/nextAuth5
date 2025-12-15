"use server";
import { connectDB } from "@/lib/connectDb";
import userModel from "@/models/user.model";
import bcrypt from "bcryptjs";

export async function registerUser(formData) {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const hashedPassword = bcrypt.hash(password, 10);

    // Check if user exists
    const isExisting = await userModel.findOne({ email });
    if (isExisting) {
      return { success: false, message: "User already exists" };
    }

    await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
      token: ""
    });

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Register Error:", error);
    return { success: false, message: "Server error" };
  }
}
