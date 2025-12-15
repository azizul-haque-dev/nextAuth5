import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    method: {
      type: String,
      enum: ["google", "credentials"],
      required: true,
      default: "credentials"
    },

    name: {
      type: String,
      required: function () {
        return this.method === "credentials";
      },
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },

    password: {
      type: String
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
