import { ReactNode } from "react";

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

export type UserInfo = {
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

export type PageInfo = {
  _id?: string;
  avatar?: string;
  slug?: string;
  pageType?: string;
  title?: string;
  content?: string;
  published?: boolean;
  tags?: string;
  enabled?: string;
};

export type Token = {
  domain?: string;
  token?: string;
  url?: string;
};

export type JobConfig = {
  filter?: boolean;
  region?: string;
  shows?: number;
  sortBy?: string;
  view?: string;
  industry?: string[];
  salaryRange?: {
    min?: number;
    max?: number;
  };
  jobSite?: string[];
  postedDate?: string;
  jobType?: string;
};
