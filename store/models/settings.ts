import { SchoolAnalitics, SchoolRank } from "./../../interfaces/index";
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { UserInfo, SchoolTypes, WebWindow } from "../../interfaces";
import { AccountTypes, AccountRoles, StateTypes } from "../../interfaces/enums";

export const settings = createModel<RootModel>()({
  state: {
    windows: { width: 0, height: 0, size: "xxl" } as WebWindow,
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

    ranking: {
      googlePresence: 0,
      citations: 0,
      hindex: 0,
      i10hindex: 0,
    } as SchoolRank,

    statistics_school: {} as SchoolTypes,
    analytics_school: {} as SchoolAnalitics,
  },
  reducers: {
    setWebWindow(state, payload: WebWindow) {
      return { ...state, windows: payload };
    },
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
    setStatistics(state, payload: object) {
      return { ...state, statistics_school: payload };
    },
    setAnalytics(state, payload: object) {
      return { ...state, analytics_school: payload };
    },
    setRank(state, payload: object) {
      return { ...state, ranking: payload };
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
