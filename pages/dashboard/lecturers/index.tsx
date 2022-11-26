import { NextPage } from "next";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import AppDrawer from "../../../serverlets/AppDrawer";

import { faPlus, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { compose } from "redux";
import { withLecturers } from "../../../utils/withInitialProps";
import LecturersRanking from "../../../serverlets/LecturersRanking";

const Lecturers: NextPage = ({ token }: any) => {
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} token={token} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance row">
                <div className="left">
                  <span className="title">Manage Lecturers</span>
                  <h1 className="total">
                    <FontAwesomeIcon icon={faUsersGear} /> Lecturers
                  </h1>
                </div>
                <div className="right flex">
                  <Link href="#" legacyBehavior>
                    <a className="button">
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <LecturersRanking />
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="lecturers" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync, withLecturers)(Lecturers);
