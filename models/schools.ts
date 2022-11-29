import mongoose from "mongoose";

mongoose.Promise = global.Promise;
import {
  StateTypes,
  OwnerTypes,
  AccountTypes,
  AccountRoles,
} from "../interfaces/enums";
import { Gender, StudentType } from "../interfaces/enums";

const accountsScheme = new mongoose.Schema(
  {
    accountType: {
      type: String,
      enum: Object.values(AccountTypes),
      default: AccountTypes.ADMIN,
    },
    role: {
      type: String,
      enum: Object.values(AccountRoles),
      default: AccountRoles.USER,
    },
    avatar: {
      type: String,
      default: "/images/avatar/user.png",
    },
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    email: {
      type: String,
      unique: true,
    },
    mobile: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
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
    otp: {
      enabled: { type: Boolean, default: true },
      code: String,
    },
    password: { type: String },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

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
    accounts: [accountsScheme],
    students: [studentsScheme],
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
