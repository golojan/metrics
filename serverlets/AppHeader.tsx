import React, { useState } from "react";
import {
  faArrowLeft,
  faHome,
  faListUl,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppSidebar from "./AppSidebar";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import { AccountInfo } from "../interfaces";
import { userAtom, schoolAtom, idelTimeAtom } from "../store";
import { authlogout } from "../utils/withAuthSync";
// import SiteBusy from "../components/SiteBusy";

interface AppHeaderProps {
  token?: string;
  isroot: boolean;
}

function AppHeader({ token, isroot }: AppHeaderProps) {
  const [school] = useAtom(schoolAtom);
  const [user] = useAtom<AccountInfo>(userAtom);
  const [rem] = useAtom<number>(idelTimeAtom);
  return (
    <>
      {isroot ? (
        <>
          <AppSidebar />
          <div className="appHeader bg-primary text-light">
            <div className="left">
              <a
                href="#"
                className="headerButton"
                data-toggle="modal"
                data-target="#sidebarPanel"
              >
                <FontAwesomeIcon icon={faListUl} size={"2x"} />
              </a>
            </div>
            <div className="pageTitle">
              <h2 className="text-white mt-2">{`${school.name} (${school.shortname})`}</h2>
            </div>
            <div className="right">
              <a href="#" className="headerButton">
                <FontAwesomeIcon icon={faHome} />
              </a>
              <a href="#" className="headerButton">
                <Image
                  width={32}
                  height={32}
                  src="/avatars/avatar.png"
                  className="imaged w32"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="headerButton text-white"
                onClick={authlogout}
              >
                <FontAwesomeIcon icon={faUserLock} />
                <span className="badge badge-success">{rem}</span>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="appHeader no-border transparent position-absolute">
            <div className="left">
              <Link href="#" legacyBehavior>
                <a className="headerButton">
                  <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
                </a>
              </Link>
            </div>

            <div className="pageTitle">
              <h1 className="text-black mt-2">School Admin</h1>
            </div>
            <div className="right">
              <a href="#" className="headerButton">
                <FontAwesomeIcon icon={faHome} />
                <span className="badge badge-danger">0</span>
              </a>
              <a href="#" className="headerButton">
                <Image
                  width={32}
                  height={32}
                  src="/avatars/avatar.png"
                  className="imaged w32"
                  alt=""
                />
                <span className="badge badge-danger">0</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AppHeader;
