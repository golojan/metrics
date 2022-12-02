import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const departmentsScheme = new mongoose.Schema(
  {
    domain: { type: String, default: "localhost" },
    facultyId: { type: String },
    name: { type: String },
    description: { type: String },
    accredited: { type: Boolean, default: false },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Departments;
const Departments =
  mongoose.models.Departments ||
  mongoose.model("Departments", departmentsScheme);
export default Departments;
