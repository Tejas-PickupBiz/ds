import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  approval: {
    type: Number,
    enum: [0, 1, 3, 4],
    default: 0,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
