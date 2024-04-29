import verifyUser from "./jwt.middleware.js";

const middleware = {
  VerifyUser: verifyUser,
};

export default middleware;
