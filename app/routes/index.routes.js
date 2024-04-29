import auth from "./auth.routes.js";
import blog from "./blog/blog.routes.js";
import FAQ from "./FAQ.routes.js";
import generic from "./generics/generics.routes.js";
import Inquiry from "./inquiry.routes.js";
import student from "./students/student.routes.js";

const Router = {
  AuthRouter: auth,
  StudentRouter: student,
  GenericRouter: generic,
  FAQRouter: FAQ,
  InquiryRouter: Inquiry,
  BlogRouter: blog,
};

export default Router;
