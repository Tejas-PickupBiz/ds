import db from "../../models/index.js";

const createGender = async (req, res) => {
  try {
    const gender = await db.GenderModel.create(req.body);
    if (!gender) {
      return res.status(404).json({
        success: false,
        message: "Gender not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Gender created successfully",
      data: gender,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getGender = async (req, res) => {
  try {
    const gender = await db.GenderModel.find();
    res.status(200).json({
      success: true,
      message: "Gender fetched successfully",
      data: gender,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateGender = async (req, res) => {
  try {
    const gender = await db.GenderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "Gender updated successfully",
      data: gender,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteGender = async (req, res) => {
  try {
    const gender = await db.GenderModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Gender deleted successfully",
      data: gender,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getGenderById = async (req, res) => {
  try {
    const gender = await db.GenderModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Gender fetched successfully",
      data: gender,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const genderController = {
  createGender,
  getGender,
  updateGender,
  deleteGender,
  getGenderById,
};

export default genderController;
