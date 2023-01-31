import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save",async function(next: mongoose.HookNextFunction){

// })

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
