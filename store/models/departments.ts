import { loadDepartments } from "./../../utils/queries";
import { DepartmentsInfo } from "../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const departments = createModel<RootModel>()({
  state: {
    departmentsCount: 0,
    dBusy: false,
    departments: [] as DepartmentsInfo[],
    loaded: false,
  },
  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, dBusy: payload };
    },
    setDepartments(state, payload: any) {
      return { ...state, departments: payload };
    },
    setDepartmentsCount(state, payload: number) {
      return { ...state, departmentsCount: payload };
    },
  },
  effects: (dispatch) => ({
    countDepartments: async () => {
      const response = await fetch("/api/faculties/count");
      const {} = await response.json();
    },
    async addDepartment(payload: DepartmentsInfo, rootState) {
      this.setBusy(true);
      const domain = rootState.settings.domain;
      const response = await fetch(`/api/departments/${domain}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const { status } = await response.json();
      if (status) {
        loadDepartments(domain)
          .then((faculties) => {
            this.setDepartments(faculties.data);
            this.setDepartmentsCount(faculties.data.length);
          })
          .catch();
      }
      this.setBusy(false);
      return status;
    },
  }),
});
