import db from "../../models/index.js";

const createSection = async (req, res) => {
  try {
    const section = await db.SectionModel.create(req.body);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Section created successfully",
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSection = async (req, res) => {
  try {
    const section = await db.SectionModel.find();
    res.status(200).json({
      success: true,
      message: "Section fetched successfully",
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSection = async (req, res) => {
  try {
    const section = await db.SectionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "Section updated successfully",
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSection = async (req, res) => {
  try {
    const section = await db.SectionModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Section deleted successfully",
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSectionById = async (req, res) => {
  try {
    const section = await db.SectionModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Section fetched successfully",
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const sectionController = {
  createSection,
  getSection,
  updateSection,
  deleteSection,
  getSectionById,
};

export default sectionController;
