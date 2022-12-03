import { ReactNode } from "react";
import { Gender, LecturerType, StudentType } from "./enums";

export type FakerLecturer = {
  sex?: Gender;
  type?: LecturerType;
  isprofessor?: boolean;
  isfullprofessor?: boolean;
  adjunct?: boolean;
  departmentId?: string;
};

export type FakerStudent = {
  sex?: Gender;
  type?: StudentType;
  challanged?: boolean;
  departmentId?: string;
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

export type LecturerStats = {
  status?: string;
  count?: number;
  countLocal?: number;
  countIntl?: number;
  countMale?: number;
  countFemale?: number;
  countLocalFemale?: number;
  countLocalMale?: number;
  countIntlFemale?: number;
  countIntlMale?: number;
  countProfessors?: number;
  countProfessorsMale?: number;
  countProfessorsFemale?: number;
  countIntlProfessors?: number;
  countFullProfessors?: number;
  countFullProfessorsMale?: number;
  countFullProfessorsFemale?: number;
  countAdjunct?: number;
  countAdjunctFemale?: number;
  countAdjunctMale?: number;
  countAdjunctProfessors?: number;
  countAdjunctProfessorsMale?: number;
  countAdjunctProfessorsFemale?: number;
  countPHDLecturers?: number;
  countSeniorLecturers?: number;
  countJuniorLecturers?: number;
};

export type LecturerAnalitics = {
  INTERNATIONAL_LECTURERS?: number;
  FEMALE_LECTURERS?: number;
  MALE_PROFESSORS?: number;
  PHD_LECTURERS?: number;
  ADJUNCT_LECTURERS?: number;
  ADJUNCT_PROFESSORS?: number;
  PROFESSORS?: number;
  FULL_PROFESSORS?: number;
  INTERNATIONAL_PROFESSORS?: number;
  FEMALE_PROFESSORS?: number;
  PERCENTAGE_JUNIOR_LECTURERS?: number;
  PERCENTAGE_SENIOR_LECTURERS?: number;
  JUNIO_SENIOR_LECTURERS_RATIO?: number;
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

export type StudentStats = {
  status?: boolean;
  count?: number;
  countLocal?: number;
  countIntl?: number;
  countMale?: number;
  countFemale?: number;
  countLocalMale?: number;
  countLocalFemale?: number;
  countIntlMale?: number;
  countIntlFemale?: number;
  countChallanged?: number;
  countChallangedMale?: number;
  countChallangedFemale?: number;
};

export type StudentAnalitics = {
  STUDENT_TEACHER_RATIO?: number;
  PERCENTAGE_FEMALE?: number;
  INTERNATIONAL_STUDENTS?: number;
  PERCENTAGE_CHALLANGED_STUDENTS?: number;
  CHALLANGED_STUDENTS_RATIO?: number;
};

export type FacultyAnalitics = {
  STUDENT_TEACHER_RATIO?: number;
};

export type FacultyStats = {
  status?: boolean;
  count?: number;
};

export type DepartmentAnalitics = {
  FULL_ACCREDITATION?: number;
};

export type DepartmentStats = {
  status?: boolean;
  count?: number;
  countAccredited?: number;
  countNonAccredited?: number;
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
