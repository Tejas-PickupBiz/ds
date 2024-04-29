import db from "../../models/index.js";

const createCaste = async (req, res) => {
  try {
    const caste = await db.CasteModel.create(req.body);
    if (!caste) {
      return res.status(404).json({
        success: false,
        message: "Caste not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Caste created successfully",
      data: caste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCaste = async (req, res) => {
  try {
    const caste = await db.CasteModel.find();
    res.status(200).json({
      success: true,
      message: "Caste fetched successfully",
      data: caste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCaste = async (req, res) => {
  try {
    const caste = await db.CasteModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "Caste updated successfully",
      data: caste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCaste = async (req, res) => {
  try {
    const caste = await db.CasteModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Caste deleted successfully",
      data: caste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCasteById = async (req, res) => {
  try {
    const caste = await db.CasteModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Caste fetched successfully",
      data: caste,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const casteController = {
  createCaste,
  getCaste,
  updateCaste,
  deleteCaste,
  getCasteById,
};

export default casteController;
