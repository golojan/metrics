import { Models } from "@rematch/core";
import { settings } from "./settings";
import { students } from "./students";
import { lecturers } from "./lecturers";

export interface RootModel extends Models<RootModel> {
  settings: typeof settings;
  students: typeof students;
  lecturers: typeof lecturers;
}

export const models: RootModel = { settings, students, lecturers };
