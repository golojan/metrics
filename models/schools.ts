import mongoose from "mongoose";

mongoose.Promise = global.Promise;
import { StateTypes, OwnerTypes } from "../interfaces/enums";

const schoolsScheme = new mongoose.Schema(
  {
    logo: {
      type: String,
      default: "/assets/img/logo-icon.png",
    },
    owner: { type: Boolean, default: false },
    domain: { type: String, unique: true },
    name: { type: String },
    shortname: { type: String, unique: true },
    state: {
      type: String,
      enum: Object.values(StateTypes),
    },
    location: String,
    ownedBy: { type: String, enum: Object.values(OwnerTypes) },
    founded: Number,
    ranking: {
      googlePresence: { type: Number, default: 0 },
      citations: { type: Number, default: 0 },
      hindex: { type: Number, default: 0 },
      i10hindex: { type: Number, default: 0 },
    },
    history: [
      {
        name: String,
        lecturers: [],
        students: [],
        googlePresence: { type: Number, default: 0 },
        citations: { type: Number, default: 0 },
        hindex: { type: Number, default: 0 },
        i10hindex: { type: Number, default: 0 },
        allschools: [],
        adminId: String,
      },
      { timestamps: true },
    ],
    indicators: [
      {
        name: { type: String },
        title: String,
        category: String,
        enabled: {
          type: Boolean,
          default: false,
        },
        showGraph: {
          type: Boolean,
          default: true,
        },
      },
    ],
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
