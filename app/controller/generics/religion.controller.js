import db from "../../models/index.js";

const createReligion = async (req, res) => {
  try {
    const religion = await db.ReligionModel.create(req.body);
    if (!religion) {
      return res.status(404).json({
        success: false,
        message: "religion not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "religion created successfully",
      data: religion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getReligion = async (req, res) => {
  try {
    const religion = await db.ReligionModel.find().populate("caste");
    res.status(200).json({
      success: true,
      message: "religion fetched successfully",
      data: religion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateReligion = async (req, res) => {
  try {
    const religion = await db.ReligionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json({
      success: true,
      message: "religion updated successfully",
      data: religion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteReligion = async (req, res) => {
  try {
    const religion = await db.ReligionModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "religion deleted successfully",
      data: religion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getReligionById = async (req, res) => {
  try {
    const religion = await db.ReligionModel.findById(req.params.id).populate(
      "caste",
    );
    res.status(200).json({
      success: true,
      message: "religion fetched successfully",
      data: religion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const religionController = {
  createReligion,
  getReligion,
  updateReligion,
  deleteReligion,
  getReligionById,
};

export default religionController;
