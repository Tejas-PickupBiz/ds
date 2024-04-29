import db from "../models/index.js";
import Utils from "../utils/index.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email, password is required" });
    }
    const existingUser = await db.UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await Utils.Bcrypt.hashedPassword(password);
    const user = await db.UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is required" });
    }
    const user = await db.UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordValid = await Utils.Bcrypt.comparePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const accessToken = Utils.JWT.generateToken({ userId: user._id });
    const refreshToken = Utils.JWT.generateRefreshToken({ userId: user._id });

    await new db.RefreshTokenModel({
      token: refreshToken,
      userId: user._id,
    }).save();
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getRefreshToken = async (req, res) => {
  try {
    const refreshToken = req.params.token;
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }
    const decode = Utils.JWT.verifyRefreshToken(refreshToken);
    const existingToken = await db.RefreshTokenModel.findOne({
      token: refreshToken,
    });
    if (!existingToken) {
      return res.status(400).json({ message: "Invalid refresh token" });
    }
    const newAccessToken = Utils.JWT.generateToken({ userId: decode.userId });
    res.status(200).json({
      success: true,
      message: "Access token generated successfully",
      accessToken: newAccessToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const logoutUser = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }
    await db.RefreshTokenModel.findOneAndDelete({ token: refreshToken });
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await db.UserModel.find();
    if (!users) {
      return res.status(400).json({ message: "Users not found" });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const getAllToken = async (req, res) => {
  try {
    const tokens = await db.RefreshTokenModel.find();
    if (!tokens) {
      return res.status(400).json({ message: "Tokens not found" });
    }
    res.status(200).json({
      success: true,
      message: "Tokens fetched successfully",
      data: tokens,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const authController = {
  registerUser,
  loginUser,
  getRefreshToken,
  logoutUser,
  getAllUsers,
  getAllToken,
};

export default authController;
