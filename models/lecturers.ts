import mongoose from "mongoose";

mongoose.Promise = global.Promise;
import { Gender, LecturerType } from "../interfaces/enums";

const lecturersScheme = new mongoose.Schema(
  {
    domain: { type: String, default: "localhost" },
    avatar: {
      type: String,
      default: "/images/avatar/user.png",
    },
    staffNumber: { type: String },
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    preffessor: {
      isProfessor: { type: Boolean, default: false },
      isFullProfessor: { type: Boolean, default: false },
    },
    email: {
      type: String,
    },
    mobile: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
    },
    lecturerType: {
      type: String,
      enum: Object.values(LecturerType),
      default: LecturerType.LOCAL,
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

delete mongoose.models.Lecturers;
const Lecturers =
  mongoose.models.Lecturers || mongoose.model("Lecturers", lecturersScheme);
export default Lecturers;
