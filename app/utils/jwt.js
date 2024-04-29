import Jwt from "jsonwebtoken";

const generateToken = (id) => {
  try {
    return Jwt.sign(id, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const generateRefreshToken = (id) => {
  try {
    return Jwt.sign(id, process.env.REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyToken = (token) => {
  try {
    return Jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
    return null;
  }
};
const verifyRefreshToken = (token) => {
  try {
    return Jwt.verify(token, process.env.REFRESH_SECRET);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const JWT = {
  generateToken,
  verifyToken,
  generateRefreshToken,
  verifyRefreshToken,
};

export default JWT;
