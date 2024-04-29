import bcrypt from "bcryptjs";

const saltRounds = 10;
const pepper = "pepperishereandidontknowwhatispepperbutitispepper";

const hashedPassword = (password) => {
  return bcrypt.hash(password + pepper, saltRounds);
};

const comparePassword = (password, hash) => {
  return bcrypt.compare(password + pepper, hash);
};

const Bcrypt = {
  hashedPassword,
  comparePassword,
};

export default Bcrypt;
