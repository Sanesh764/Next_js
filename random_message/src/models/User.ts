
import mongoose, { Schema, Document, Types } from "mongoose";

// Message Interface
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// Message Schema
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: [true, "Message content is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// User Interface
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  messages: Types.DocumentArray<Message>;
}

// User Schema
const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },

    verifyCode: {
      type: String,
      required: [true, "Verification code is required"],
    },

    verifyCodeExpiry: {
      type: Date,
      required: [true, "Verification code expiry is required"],
    },

    isAcceptingMessage: {
      type: Boolean,
      default: true,
    },

    messages: {
      type: [MessageSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Export Model
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
