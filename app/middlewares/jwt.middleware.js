import jwt from "jsonwebtoken";
const verifyUser = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      req.user = decoded.user;
      next();
    });
  } else {
    return res.status(401).json({ message: "No Token Found" });
  }
};

export default verifyUser;
