import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  parentsubsid: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isActivated: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
  dob: {
    type: Date,
  },
  roles: {
    type: String,
    enum: ["admin", "principal", "user"],
  },
  priority: {
    type: Number,
  },
  aadharCardNo: {
    type: Number,
  },
  PAN: {
    type: String,
  },
  mobileNo: {
    type: Number,
  },
  address: {
    area: {
      type: String,
    },
    street: {
      type: String,
    },
    landmark: {
      type: String,
    },
    district: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
  },
  refreshTokens: {
    type: Array,
    default: [],
  },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
