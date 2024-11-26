import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // Make sure to add this import

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters long"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
}, { 
  timestamps: true // Optional: adds createdAt and updatedAt fields
});

UserSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    console.error("Password comparison error:", error);
    return false;
  }
};

export default mongoose?.models?.User || mongoose.model("User", UserSchema);