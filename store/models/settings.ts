import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { UserInfo, SchoolTypes } from "../../interfaces";
import { AccountTypes, AccountRoles, StateTypes } from "../../interfaces/enums";

export const settings = createModel<RootModel>()({
  state: {
    menuOpened: false,
    accid: "",
    domain: "",
    schoolid: null,
    page: "home",
    school: {} as SchoolTypes,
    loaded: false,
    isLogged: false,
    busy: false,
    user: {} as UserInfo,
    newUser: {
      membership: AccountTypes.STUDENT,
      role: AccountRoles.USER,
      regfee: 0,
      state: StateTypes.ENUGU,
    } as UserInfo,
    imageUrl: "/avatars/uploadholder.png",
    dynamicPages: "",
    uploaded: false,
    idelTime: 0,
  },
  reducers: {
    toggleMenu(state, payload: boolean) {
      return { ...state, menuOpened: payload };
    },
    setAccid(state, payload: string) {
      return { ...state, accid: payload };
    },
    setDomain(state, payload: string) {
      return { ...state, domain: payload };
    },
    setLoaded(state, payload: boolean) {
      return { ...state, loaded: payload };
    },
    setPage(state, payload: string) {
      return { ...state, page: payload };
    },
    setIsLogged(state, payload: boolean) {
      return { ...state, isLogged: payload };
    },
    setBusy(state, payload: boolean) {
      return { ...state, busy: payload };
    },
    setSchool(state, payload: object) {
      return { ...state, school: payload };
    },
    setNewUser(state, payload: object) {
      return { ...state, newUser: payload };
    },
    setUserInfo(state, payload: object) {
      return { ...state, user: payload };
    },
    setImageUrl(state, payload: string) {
      return { ...state, imageUrl: payload };
    },
    setDynamicPage(state, payload: string) {
      return { ...state, dynamicPages: payload };
    },
    setUploaded(state, payload: boolean) {
      return { ...state, uploaded: payload };
    },
    setIdelTime(state, payload: number) {
      return { ...state, idelTime: payload };
    },
  },
  effects: (dispatch) => ({
    async getAccountInfo(_token: string, RootState) {
      const response = await fetch(`/api/accounts/${_token}/info`);
      const userinfo = await response.json();
      this.setUserInfo(userinfo.data);
      return userinfo;
    },
    async getSchoolInfo(domain: string, RootState) {
      const response = await fetch(`/api/schools/${domain}/info`);
      const schoolinfo = await response.json();
      this.setSchool(schoolinfo.data);
      return schoolinfo;
    },
  }),
});
