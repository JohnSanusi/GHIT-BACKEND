import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { JWT_EXPIRES_IN, JWT_SECRET, NODE_ENV } from "../config/env.js";
const { sign, verify } = jwt;

const cookieOptions = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: NODE_ENV === "production" ? "strict" : "lax",
  maxAge: 24 * 60 * 60 * 1000,
};

export const signup = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password } = req.body;

    //Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save({ session });

    console.log("created user", newUser);

    const token = sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: 86400,
    });
    await session.commitTransaction();
    session.endSession();

    res
      .status(201)
      .cookie("token", token, cookieOptions)
      .json({
        success: true,
        message: "User created",
        data: {
          user: newUser,
        },
      });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("invalid password");
      error.statusCode = 404;
      throw error;
    }

    const token = sign({ userId: user._id }, JWT_SECRET, { expiresIn: 86400 });

    res.status(200).cookie("token", token, cookieOptions).json({
      success: true,
      message: "user logged in successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: NODE_ENV === "production",
        sameSite: NODE_ENV === "production" ? "strict" : "lax",
      })
      .status(200)
      .json({ success: true, message: "logged out successfully" });
  } catch (error) {
    next(error);
  }
};
