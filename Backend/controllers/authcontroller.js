


import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // 1. ye add

export const signup = async (req, res) => {
  try {
    console.log("BODY AAYA:", req.body); // 2. debug ke liye
    
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" }); // 3. ye add

    res.status(201).json({
      message: "User Registered Successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role }, // password hide
      token // 4. ye add
    });

  } catch (error) {
    console.log("ERROR:", error); // 5. error terminal me dikhega
    res.status(500).json({ message: error.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      message: "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};