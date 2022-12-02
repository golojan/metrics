import {
  FacultiesInfo,
  FacultyAnalitics,
  FacultyStats,
} from "../../interfaces/index";

import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { loadFaculties } from "../../utils/queries";

export const faculties = createModel<RootModel>()({
  state: {
    facultiesCount: 0,
    fBusy: false,
    faculties: [] as FacultiesInfo[],
    loaded: false,
    statistics_faculties: {} as FacultyStats,
    analytics_faculties: {} as FacultyAnalitics,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, fBusy: payload };
    },
    setStatistics(state, payload: object) {
      return { ...state, statistics_faculties: payload };
    },
    setAnalytics(state, payload: object) {
      return { ...state, analytics_faculties: payload };
    },
    setFaculties(state, payload: any) {
      return { ...state, faculties: payload };
    },
    setFacultiesCount(state, payload: number) {
      return { ...state, facultiesCount: payload };
    },
  },
  effects: (dispatch) => ({
    countFaculties: async () => {
      const response = await fetch("/api/faculties/count");
      const {} = await response.json();
    },
    async addFaculty(payload: FacultiesInfo, rootState) {
      this.setBusy(true);
      const domain = rootState.settings.domain;
      const response = await fetch(`/api/faculties/${domain}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const { status } = await response.json();
      if (status) {
        loadFaculties(domain)
          .then((faculties) => {
            this.setFaculties(faculties.data);
            this.setFacultiesCount(faculties.data.length);
          })
          .catch();
      }
      this.setBusy(false);
      return status;
    },
  }),
});
