import express from "express";
import Controllers from "../../controller/index.js";

const student = express.Router();

student.get("/all", Controllers.StudentController.getStudents);
student.post("/register", Controllers.StudentController.registerStudent);
student.put("/update/:id", Controllers.StudentController.updateStudent);
student.delete("/delete/:id", Controllers.StudentController.deleteStudent);
student.get("/uniq/:id", Controllers.StudentController.getStudentById);

export default student;
