import mongoose from "mongoose";

const religionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caste: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Caste",
  },
});

const genderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const casteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const bloodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  section: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Section",
  },
  subject: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject",
  },
});
const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const religion = mongoose.model("Religion", religionSchema);
const gender = mongoose.model("Gender", genderSchema);
const caste = mongoose.model("Caste", casteSchema);
const blood = mongoose.model("Blood", bloodSchema);
const classS = mongoose.model("Class", classSchema);
const section = mongoose.model("Section", sectionSchema);
const subject = mongoose.model("Subject", subjectSchema);
const genericModels = {
  religion,
  gender,
  caste,
  blood,
  classS,
  section,
  subject,
};

export default genericModels;
