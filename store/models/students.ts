import { FakerStudent, StudentInfo } from "./../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { loadStudents, loadLecturers } from "../../utils/queries";

export const students = createModel<RootModel>()({
  state: {
    studentsCount: 0,
    sBusy: false,
    students: [] as StudentInfo[],
    loaded: false,
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
    async addFakeStudent(payload: FakerStudent, rootState) {
      this.setBusy(true);
      const response = await fetch(
        `/api/fakes/student?sex=${payload.sex}&type=${payload.type}&challanged=${payload.challanged}`
      );
      const { status } = await response.json();
      if (status) {
        // dispatch.students.setBusy(BusyStatus.SUCCESS);
      } else {
        // dispatch.students.setBusy(BusyStatus.FAIL);
      }
      this.setBusy(false);
    },
  }),
});
