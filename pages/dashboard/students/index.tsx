import { NextPage } from "next";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import AppDrawer from "../../../serverlets/AppDrawer";

import { faPlus, faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { compose } from "redux";
import StudentsRanking from "../../../serverlets/StudentsRanking";

const Students: NextPage = () => {
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance row">
                <div className="left">
                  <span className="title">Manage Students</span>
                  <h1 className="total">
                    <FontAwesomeIcon icon={faUsersBetweenLines} /> Students
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
          <StudentsRanking />
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="students" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync)(Students);
