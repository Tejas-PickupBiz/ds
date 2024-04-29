import db from "../../models/index.js";

const registerStudent = async (req, res) => {
  try {
    const student = await db.StudentRegistrationModel.create(req.body);
    if (!student) {
      res.status(400).json({
        success: false,
        message: "Student registration failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "Student registration successful",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await db.StudentRegistrationModel.find()
      .populate("classS")
      .populate("subjects")
      .populate("gender")
      .populate("section")
      .populate("bloodGroup")
      .populate("religion");

    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await db.StudentRegistrationModel.findById(req.params.id)
      .populate("classS")
      .populate("subjects")
      .populate("gender")
      .populate("section")
      .populate("bloodGroup")
      .populate("religion");
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await db.StudentRegistrationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await db.StudentRegistrationModel.findByIdAndDelete(
      req.params.id,
    );
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const studentController = {
  registerStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};

export default studentController;
