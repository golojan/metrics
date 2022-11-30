import { FakerLecturer, LecturerInfo } from "../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const lecturers = createModel<RootModel>()({
  state: {
    lecturersCount: 0,
    lBusy: false,
    lecturers: [] as LecturerInfo[],
    loaded: false,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, lBusy: payload };
    },
    setLecturers(state, payload: any) {
      return { ...state, lecturers: payload };
    },
    setLecturersCount(state, payload: number) {
      return { ...state, lecturersCount: payload };
    },
  },
  effects: (dispatch) => ({
    countLecturers: async () => {
      const response = await fetch("/api/lecturers/count");
      const {} = await response.json();
    },
    async addFakeLecturer(payload: FakerLecturer, rootState) {
      this.setBusy(true);
      const response = await fetch(
        `/api/fakes/lecturer?sex=${payload.sex}&type=${payload.type}&isprofessor=${payload.isprofessor}&isfullprofessor=${payload.isfullprofessor}`
      );
      const { status } = await response.json();
      this.setBusy(false);
      return status;
    },
  }),
});
