import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const facultiesScheme = new mongoose.Schema(
  {
    domain: { type: String, default: "localhost" },
    name: { type: String },
    description: { type: String },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Faculties;
const Faculties =
  mongoose.models.Faculties || mongoose.model("Faculties", facultiesScheme);
export default Faculties;
