import db from "../models/index.js";

const createFAQ = async (req, res) => {
  try {
    const FAQ = await db.FAQModel.create(req.body);
    if (!FAQ) {
      return res.status(404).json({
        success: false,
        message: "FAQ not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "FAQ created successfully",
      data: FAQ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getFAQ = async (req, res) => {
  try {
    const FAQ = await db.FAQModel.find();
    res.status(200).json({
      success: true,
      message: "FAQ fetched successfully",
      data: FAQ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateFAQ = async (req, res) => {
  try {
    const FAQ = await db.FAQModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "FAQ updated successfully",
      data: FAQ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteFAQ = async (req, res) => {
  try {
    const FAQ = await db.FAQModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
      data: FAQ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getFAQById = async (req, res) => {
  try {
    const FAQ = await db.FAQModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "FAQ fetched successfully",
      data: FAQ,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const faqController = {
  createFAQ,
  getFAQ,
  updateFAQ,
  deleteFAQ,
  getFAQById,
};

export default faqController;
