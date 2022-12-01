import {
  FakerLecturer,
  LecturerAnalitics,
  LecturerInfo,
  LecturerStats,
} from "../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { loadLecturers } from "../../utils/queries";

export const lecturers = createModel<RootModel>()({
  state: {
    lecturersCount: 0,
    lBusy: false,
    lecturers: [] as LecturerInfo[],
    loaded: false,
    statistics_lecturers: {} as LecturerStats,
    analytics_lecturers: {} as LecturerAnalitics,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, lBusy: payload };
    },
    setStatistics(state, payload: object) {
      return { ...state, statistics_lecturers: payload };
    },
    setAnalytics(state, payload: object) {
      return { ...state, analytics_lecturers: payload };
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
      if (status) {
        const domain = rootState.settings.domain;
        loadLecturers(domain)
          .then((lecturers) => {
            this.setLecturers(lecturers.data);
            this.setLecturersCount(lecturers.data.length);
          })
          .catch();
      }
      this.setBusy(false);
      return status;
    },
  }),
});
