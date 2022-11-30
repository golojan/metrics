import { Models } from "@rematch/core";

import { settings } from "./settings";
import { students } from "./students";
import { lecturers } from "./lecturers";
import { faculties } from "./faculties";
import { departments } from "./departments";

export interface RootModel extends Models<RootModel> {
  settings: typeof settings;
  students: typeof students;
  lecturers: typeof lecturers;
  faculties: typeof faculties;
  departments: typeof departments;
}

export const models: RootModel = {
  settings,
  students,
  lecturers,
  faculties,
  departments,
};
