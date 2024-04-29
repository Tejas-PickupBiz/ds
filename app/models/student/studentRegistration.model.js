import mongoose, { mongo } from "mongoose";

const studentRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gender",
  },
  dob: {
    type: Date,
    required: true,
  },
  religion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Religion",
  },
  caste: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Caste",
  },
  bloodGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blood",
  },
  Address: {
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
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  classS: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
  },
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject",
  },
  activity: {
    type: String,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherPhone: {
    type: Number,
    required: true,
  },
  motherPhone: {
    type: Number,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  parentIdProof: {
    type: String,
  },
  loginUsername: {
    type: String,
    required: true,
  },
  loginEmail: {
    type: String,
    required: true,
  },
  loginPassword: {
    type: String,
    required: true,
  },
  parentLoginUsername: {
    type: String,
  },
  parentLoginEmail: {
    type: String,
  },
  parentLoginPassword: {
    type: String,
  },
  transportVehicle: {
    type: String,
  },
});

const studentReg = mongoose.model(
  "StudentRegistration",
  studentRegistrationSchema,
);

export default studentReg;
