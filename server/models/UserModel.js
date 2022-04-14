import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  id: { type: String },
});

var UserSchema = mongoose.model("User", userSchema);

export default UserSchema;
