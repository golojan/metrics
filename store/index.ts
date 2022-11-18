import { AccountTypes, AccountRoles, States } from "./../interfaces/enums";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { AccountInfo, UserInfo } from "../interfaces";

export const domainAtom = atom<string>("metrics.ng");
export const loadedAtom = atom(false);

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
  state: States.ENUGU,
});

export const intakesAtom = atom<AccountInfo[]>([]);
