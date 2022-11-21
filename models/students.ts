import mongoose from "mongoose";
mongoose.Promise = global.Promise;

import { Gender, StudentType } from "../interfaces/enums";

const studentsScheme = new mongoose.Schema(
  {
    avatar: {
      type: String,
      default: "/images/avatar/user.png",
    },
    regNumber: { type: String },
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    email: {
      type: String,
    },
    mobile: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
    },
    studentType: {
      type: String,
      enum: Object.values(StudentType),
      default: StudentType.LOCAL,
    },
    addresses: {
      contact: {
        street: String,
        city: String,
        lga: String,
        state: String,
        zip: String,
        country: { type: String, default: "Nigeria" },
      },
    },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Students;
const Students =
  mongoose.models.Students || mongoose.model("Students", studentsScheme);
export default Students;
