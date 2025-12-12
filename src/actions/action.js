"use server";
import { signIn } from "@/auth";
import { connectDB } from "@/lib/connectDb";
import userModel from "@/models/user.model";

export async function registerUser(formData) {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if user exists
    const isExisting = await userModel.findOne({ email });
    if (isExisting) {
      return { success: false, message: "User already exists" };
    }

    await userModel.create({
      name,
      email,
      password,
      role: "user",
      token: ""
    });

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Register Error:", error);
    return { success: false, message: "Server error" };
  }
}

export async function credentialLogin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (res?.error) {
      return { success: false, message: res.error };
    }

    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
}

export async function googleLogin() {
  try {
    const res = await signIn("google", {
      callbackUrl: "/user"
    });
    console.log(res, "google login");
    if (res?.error) {
      return { success: false, message: res.error };
    }

    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
}
