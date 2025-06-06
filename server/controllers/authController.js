import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Controller funtion for registration
export const register = async (req, res) => {
  const { name, email, password, date_of_birth } = req.body;

  if (!name || !email || !password || !date_of_birth) {
    return res.json({ success: false, message: "Missing Details" });
  }
  try {
    // first check the email if it exists for the already user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exits" });
    }

    // if no user exits then it will first encrypt the password and then storing the details in the database
    const hasedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hasedPassword,
      date_of_birth,
    });
    await user.save();

    // for generating the token to store it in the local storage
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", //false for localhost but true for server
      sameSite: process.env.NODE_ENV === "production",
      none: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//Controller funtion for Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }
  try {
    // finding the user with the help of email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email" });
    }
    // if email is matched
    // comparing the password (user enter and that is saved in the Database)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }
    // if the password is also matched
    // we need to generate a token which helps in user authentication and login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", //false for localhost but true for server
      sameSite: process.env.NODE_ENV === "production",
      none: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//EXTRA
//Controller funtion for Logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", //false for localhost but true for server
      sameSite: process.env.NODE_ENV === "production",
      none: "strict",
    });
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
