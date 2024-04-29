import authController from "../Auth/auth.controller.js";
import blogController from "./blog/blog.controller.js";
import faqController from "./FAQ.controller.js";
import bloodController from "./generics/blood.controller.js";
import casteController from "./generics/caste.controller.js";
import classesController from "./generics/classes.controller.js";
import genderController from "./generics/gender.controller.js";
import religionController from "./generics/religion.controller.js";
import sectionController from "./generics/section.controller.js";
import subjectController from "./generics/subject.controller.js";
import inquiryController from "./inquiry.controller.js";
import studentController from "./student/registration.controller.js";

const Controllers = {
  Auth: authController,
  StudentController: studentController,
  GenderController: genderController,
  ReligionController: religionController,
  CasteController: casteController,
  BloodController: bloodController,
  SubjectController: subjectController,
  SectionController: sectionController,
  ClassesController: classesController,
  FAQController: faqController,
  InquiryController: inquiryController,
  BlogController: blogController,
};

export default Controllers;
