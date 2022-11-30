import mongoose from "mongoose";
import Schools from "./schools";
import Accounts from "./accounts";
import Students from "./students";
import Lecturers from "./lecturers";

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
  const conn = await mongoose
    .connect(MONGOOSE_URI as string)
    .then(() => {})
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");
  return { conn, Schools, Accounts, Students, Lecturers };
};
