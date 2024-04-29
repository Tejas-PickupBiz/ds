import mongoose, { mongo } from "mongoose";

const inquirySchema = new mongoose.Schema({
  classS: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: true,
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
