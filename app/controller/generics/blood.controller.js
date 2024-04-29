import db from "../../models/index.js";

const createBloodGroup = async (req, res) => {
  try {
    const blood = await db.BloodGroupModel.create(req.body);
    if (!blood) {
      return res.status(404).json({
        success: false,
        message: "blood not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "blood created successfully",
      data: blood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBloodGroup = async (req, res) => {
  try {
    const blood = await db.BloodGroupModel.find();
    res.status(200).json({
      success: true,
      message: "blood fetched successfully",
      data: blood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBloodGroup = async (req, res) => {
  try {
    const blood = await db.BloodGroupModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "blood updated successfully",
      data: blood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBloodGroup = async (req, res) => {
  try {
    const blood = await db.BloodGroupModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "blood deleted successfully",
      data: blood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBloodGroupById = async (req, res) => {
  try {
    const blood = await db.BloodGroupModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "blood fetched successfully",
      data: blood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const bloodController = {
  createBloodGroup,
  getBloodGroup,
  updateBloodGroup,
  deleteBloodGroup,
  getBloodGroupById,
};

export default bloodController;
