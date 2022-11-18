import mongoose from "mongoose";
mongoose.Promise = global.Promise;

import { AccountRoles, Gender, AccountTypes } from "../interfaces/enums";

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
    university: { type: String },
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

delete mongoose.models.Accounts;
const Accounts =
  mongoose.models.Accounts || mongoose.model("Accounts", accountsScheme);
export default Accounts;
