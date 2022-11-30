import mongoose from "mongoose";

mongoose.Promise = global.Promise;
import { StateTypes, OwnerTypes } from "../interfaces/enums";

const schoolsScheme = new mongoose.Schema(
  {
    logo: {
      type: String,
      default: "/assets/img/logo-icon.png",
    },
    domain: { type: String, unique: true },
    name: { type: String },
    shortname: { type: String },
    state: {
      type: String,
      enum: Object.values(StateTypes),
    },
    location: String,
    ownedBy: { type: String, enum: Object.values(OwnerTypes) },
    founded: Number,
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Schools;
const Schools =
  mongoose.models.Schools || mongoose.model("Schools", schoolsScheme);
export default Schools;
