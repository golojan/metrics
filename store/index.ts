import { AccountTypes, AccountRoles, StateTypes } from "./../interfaces/enums";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { AccountInfo, UserInfo, SchoolTypes } from "../interfaces";

export const domainAtom = atomWithStorage<string>("domain", "metrics.ng");
export const schoolAtom = atomWithStorage<SchoolTypes>("school", {});

export const loadedAtom = atom(false);

export const idelTimeAtom = atom(0);

export const accidAtom = atom("");
export const pageAtom = atom("home");
export const busyAtom = atom(false);
export const userAtom = atom<AccountInfo>({});
export const blogImageAtom = atom<string>("/avatars/uploadholder.png");
export const uploadedAtom = atom<boolean>(false);

export const isLoggedInAtom = atom(false);
export const imageUrlAtom = atom<string>("/avatars/uploadholder.png");
export const dynamicPagesAtom = atomWithStorage("dynamicpage", "");

export const newUserAtom = atom<UserInfo>({
  membership: AccountTypes.STUDENT,
  role: AccountRoles.USER,
  regfee: 0,
  state: StateTypes.ENUGU,
});

export const intakesAtom = atom<AccountInfo[]>([]);
