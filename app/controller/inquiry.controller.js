import db from "../models/index.js";

const registerInquiry = async (req, res) => {
  try {
    const inquiry = await db.InquiryModel.create(req.body);
    if (!inquiry) {
      res.status(400).json({
        success: false,
        message: "Inquiry registration failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "Inquiry registration successful",
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getInquirys = async (req, res) => {
  try {
    const inquirys = await db.InquiryModel.find()
      .populate("classS")
      .populate("section");

    res.status(200).json({
      success: true,
      message: "Inquirys fetched successfully",
      data: inquirys,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getInquiryById = async (req, res) => {
  try {
    const inquiry = await db.InquiryModel.findById(req.params.id)
      .populate("classS")
      .populate("section");
    if (!inquiry) {
      res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Inquiry fetched successfully",
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateInquiry = async (req, res) => {
  try {
    const inquiry = await db.InquiryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!inquiry) {
      res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Inquiry updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await db.InquiryModel.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const inquiryController = {
  registerInquiry,
  getInquirys,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
};

export default inquiryController;
