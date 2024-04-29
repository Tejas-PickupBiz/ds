import Blog from "./blog/blog.model.js";
import FAQ from "./FAQ.model.js";
import genericModels from "./generics/generic.model.js";
import Inquiry from "./inquiry.model.js";
import refreshToken from "./RefreshToken.model.js";
import studentReg from "./student/studentRegistration.model.js";
import UserModel from "./User.model.js";

const db = {
  UserModel: UserModel,
  RefreshTokenModel: refreshToken,
  GenderModel: genericModels.gender,
  ReligionModel: genericModels.religion,
  CasteModel: genericModels.caste,
  BloodGroupModel: genericModels.blood,
  ClassModel: genericModels.classS,
  SectionModel: genericModels.section,
  SubjectModel: genericModels.subject,
  StudentRegistrationModel: studentReg,
  FAQModel: FAQ,
  InquiryModel: Inquiry,
  BlogModel: Blog,
};

export default db;
