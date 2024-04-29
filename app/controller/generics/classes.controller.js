import db from "../../models/index.js";

const createClass = async (req, res) => {
  try {
    const classes = await db.ClassModel.create(req.body);
    if (!classes) {
      return res.status(404).json({
        success: false,
        message: "Class not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Class created successfully",
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getClass = async (req, res) => {
  try {
    const classes = await db.ClassModel.find()
      .populate("section")
      .populate("subject");
    res.status(200).json({
      success: true,
      message: "Class fetched successfully",
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateClass = async (req, res) => {
  try {
    const classes = await db.ClassModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteClass = async (req, res) => {
  try {
    const classes = await db.ClassModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Class deleted successfully",
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getClassById = async (req, res) => {
  try {
    const classes = await db.ClassModel.findById(req.params.id)
      .populate("section")
      .populate("subject");
    res.status(200).json({
      success: true,
      message: "Class fetched successfully",
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const classesController = {
  createClass,
  getClass,
  updateClass,
  deleteClass,
  getClassById,
};

export default classesController;
