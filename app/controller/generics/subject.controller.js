import db from "../../models/index.js";

const createSubject = async (req, res) => {
  try {
    const subject = await db.SubjectModel.create(req.body);
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Subject created successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSubject = async (req, res) => {
  try {
    const subject = await db.SubjectModel.find();
    res.status(200).json({
      success: true,
      message: "Subject fetched successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSubject = async (req, res) => {
  try {
    const subject = await db.SubjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const subject = await db.SubjectModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Subject deleted successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSubjectById = async (req, res) => {
  try {
    const subject = await db.SubjectModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Subject fetched successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const subjectController = {
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
  getSubjectById,
};

export default subjectController;
