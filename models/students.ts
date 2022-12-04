import mongoose from "mongoose";

mongoose.Promise = global.Promise;
import { Gender, StudentType } from "../interfaces/enums";

const studentsScheme = new mongoose.Schema(
  {
    domain: { type: String, default: "localhost" },
    avatar: {
      type: String,
      default: "/images/avatar/user.png",
    },
    departmentId: { type: String },
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
    challanged: {
      type: Boolean,
      default: false,
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
    academics: {
      yearAdmitted: Number, //year admitted//
      yearToGraduated: Number, //year graduated//
      yearGraduated: Number, //year graduated//
    },
    googlePresence: { type: Number, default: 0 },
    citations: { type: Number, default: 0 },
    hindex: { type: Number, default: 0 },
    i10hindex: { type: Number, default: 0 },
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
