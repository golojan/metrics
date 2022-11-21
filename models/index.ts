import mongoose from "mongoose";
import Accounts from "./accounts";
import Schools from "./schools";
import Students from "./students";

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
  const conn = await mongoose
    .connect(MONGOOSE_URI as string)
    .then(() => {})
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");
  return { conn, Accounts, Schools, Students };
};
