import db from "../../models/index.js";

const createBlog = async (req, res) => {
  try {
    const blog = await db.BlogModel.create(req.body);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not created",
      });
    }
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await db.BlogModel.find();
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await db.BlogModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await db.BlogModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await db.BlogModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const blogController = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
};

export default blogController;
