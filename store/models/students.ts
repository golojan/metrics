import { FakerStudent, StudentInfo } from "./../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { loadStudents } from "../../utils/queries";

export const students = createModel<RootModel>()({
  state: {
    studentsCount: 0,
    sBusy: false,
    students: [] as StudentInfo[],
    loaded: false,
    maleStudents: 0,
    femaleStudents: 0,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, sBusy: payload };
    },
    setStudents(state, payload: any) {
      return { ...state, students: payload };
    },
    setStudentsCount(state, payload: number) {
      return { ...state, studentsCount: payload };
    },
  },
  effects: (dispatch) => ({
    countStudents: async () => {
      const response = await fetch("/api/students/count");
      const {} = await response.json();
    },
    getMale: async () => {
      const response = await fetch("/api/students/count");
      const {} = await response.json();
    },
    async addFakeStudent(payload: FakerStudent, rootState) {
      this.setBusy(true);
      const response = await fetch(
        `/api/fakes/student?sex=${payload.sex}&type=${payload.type}&challanged=${payload.challanged}`
      );
      const { status } = await response.json();
      if (status) {
        const domain = rootState.settings.domain;
        loadStudents(domain)
          .then((students) => {
            this.setStudents(students.data);
            this.setStudentsCount(students.data.length);
          })
          .catch();
      }
      this.setBusy(false);
      return status;
    },
  }),
});
