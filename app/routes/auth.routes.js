import express from "express";
import Controllers from "../controller/index.js";
import middleware from "../middlewares/index.js";

const auth = express.Router();

auth.post("/register", Controllers.Auth.registerUser);
auth.post("/login", Controllers.Auth.loginUser);
auth.post("/logout", Controllers.Auth.logoutUser);
auth.get("/refresh/:token", Controllers.Auth.getRefreshToken);
auth.get("/users", middleware.VerifyUser, Controllers.Auth.getAllUsers);
auth.get("/token", Controllers.Auth.getAllToken);
export default auth;
