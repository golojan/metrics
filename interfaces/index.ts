import { ReactNode } from "react";
import { Gender, LecturerLevel, LecturerType, StudentType } from "./enums";

export type SchoolInfo = {
  _id?: string;
  owner?: string;
  name?: string;
  shortname?: string;
  logo?: string;
};

export interface IHistory {
  name?: string;
  lecturers?: LecturerInfo[];
  students?: StudentInfo[];
  googlePresence?: number;
  citations?: number;
  hindex?: number;
  i10hindex?: number;
  allschools?: [{}];
  adminId?: string;
}

export type GSRanking = {
  scrap?: boolean;
  url?: string;
  scrapper?: string;
  googlePresence?: number;
  citations?: number;
  hindex?: number;
  i10hindex?: number;
};

export type SchoolRank = {
  googlePresence?: number;
  citations?: number;
  hindex?: number;
  i10hindex?: number;
};

export type IStats = {
  max?: number;
  min: number;
  mid: number;
  dir: string;
  perc: number;
};

export type ScholarsProps = { lecturers: LecturerInfo[] };

export type WebWindow = {
  addEventListener(arg0: string, handleResize: () => void): unknown;
  width?: number;
  height?: number;
  size?: string;
};

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
  shortname?: String;
  state?: string;
  location?: String;
  ownedBy?: string;
  founded?: number;
  ranking?: {
    googlePresence?: number;
    citations?: number;
    hindex?: number;
    i10hindex?: number;
  };
  history?: [
    {
      name?: string;
      lecturers?: LecturerInfo[];
      students?: StudentInfo[];
      googlePresence?: number;
      citations?: number;
      hindex?: number;
      i10hindex?: number;
      allschools: [{}];
      adminId: String;
    }
  ];
};

export type SchoolStats = {
  status?: boolean;
  count?: number;
  googlePresence?: number;
  citation?: number;
  hindex?: number;
  i10hindex?: number;
};

export type SchoolAnalitics = {};

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
  staffNumber?: number;
  avatar?: string;
  departmentId?: string;
  staffnumber?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  adjunct?: boolean;
  level?: LecturerLevel;
  withPhd?: boolean;
  professor?: {
    isProfessor?: boolean;
    isFullProfessor?: boolean;
  };
  email?: string;
  mobile?: string;
  gender?: Gender;
  lecturerType?: LecturerType;
  addresses?: {
    contact?: {
      street?: string;
      city?: string;
      lga?: string;
      state?: string;
      zip?: string;
      country?: string;
    };
  };
  googlePresence?: number;
  citations?: number;
  hindex?: number;
  i10hindex?: number;
  enabled?: boolean;
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
  avatar?: string;
  departmentId?: string;
  regNumber?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  mobile?: string;
  gender?: Gender;
  studentType: StudentType;
  challanged?: boolean;
  addresses?: {
    contact?: {
      street?: string;
      city?: string;
      lga?: string;
      state?: string;
      zip?: string;
      country?: string;
    };
  };
  googlePresence?: number;
  citations?: number;
  hindex?: number;
  i10hindex: number;
  enabled?: boolean;
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
  regfee?: number;
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
  regfee?: number;
  referrer?: string;
  enabled?: boolean;
};

export type Token = {
  domain?: string;
  token?: string;
  url?: string;
};
