import express from "express";
import Controllers from "../../controller/index.js";

const blog = express.Router();

blog.get("/all", Controllers.BlogController.getBlog);
blog.post("/create", Controllers.BlogController.createBlog);
blog.put("/update/:id", Controllers.BlogController.updateBlog);
blog.delete("/delete/:id", Controllers.BlogController.deleteBlog);
blog.get("/uniq/:id", Controllers.BlogController.getBlogById);

export default blog;
