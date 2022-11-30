import { FacultiesInfo } from "../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { loadFaculties } from "../../utils/queries";

export const faculties = createModel<RootModel>()({
  state: {
    facultiesCount: 0,
    fBusy: false,
    faculties: [] as FacultiesInfo[],
    loaded: false,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, fBusy: payload };
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
