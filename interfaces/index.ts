import { ReactNode } from "react";
import { Gender, StudentType } from "./enums";

export type FakerLecturer = {
  sex?: Gender;
  type?: StudentType;
  isprofessor?: boolean;
  isfullprofessor?: boolean;
};

export type FakerStudent = {
  sex?: Gender;
  type?: StudentType;
  challanged?: boolean;
};

export type IndustryProps = {
  indystryType: string;
};

export type SchoolTypes = {
  logo?: string;
  domain?: string;
  name?: string;
  shortname?: { type: String };
  state?: string;
  location?: String;
  ownedBy?: string;
  founded?: Number;
};

export interface Props {
  children?: ReactNode;
}

export interface ResponseFunctions {
  GET?: Function;
  POST?: Function;
}

export type Logon = {
  domain?: string;
  username: string;
  password: string;
};

export type LecturerInfo = {
  _id?: string;
  domain?: string;
  avatar?: string;
};

export type FacultiesInfo = {
  _id?: string;
  domain?: string;
  name?: string;
  description?: string;
  enabled?: boolean;
};

export type DepartmentsInfo = {
  _id?: string;
  domain?: string;
  facultyId?: string;
  name?: string;
  description?: string;
  accredited?: boolean;
  enabled?: boolean;
};

export type StudentInfo = {
  _id?: string;
  domain?: string;
  avatar?: string;
};

export type UserInfo = {
  _id?: string;
  avatar?: string;
  accid?: string;
  membership?: string;
  role?: string;
  email?: string;
  mobile?: string;
  password?: string;
  sex?: string;
  birthday?: string;
  idtype?: string;
  idnumber?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  street?: string;
  city?: string;
  lga?: string;
  state?: string;
  zip?: string;
  country?: string;
  regfee?: Number;
  referrer?: string;
  admin?: string;
};

export type AccountInfo = {
  status?: boolean;
  _id?: string;
  membership?: string;
  role?: string;
  avatar?: string;
  university?: string;
  email?: string;
  mobile?: string;
  sex?: string;
  birthday?: string;
  idtype?: string;
  idnumber?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  street?: string;
  city?: string;
  lga?: string;
  state?: string;
  zip?: string;
  country?: string;
  regfee?: Number;
  referrer?: string;
  enabled?: boolean;
};

export type Token = {
  domain?: string;
  token?: string;
  url?: string;
};
