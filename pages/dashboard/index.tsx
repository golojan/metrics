import { NextPage } from "next";
import React from "react";
import AppDrawer from "../../serverlets/AppDrawer";
import AdminLayout from "../../components/AdminLayout";

import { faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { compose } from "redux";

import Link from "next/link";
import AppHeader from "../../serverlets/AppHeader";
import Copyright from "../../serverlets/Copyright";
import { withAuthSync } from "../../utils/withAuthSync";
import SchoolRanking from "../../components/SchoolRanking";
import { withStatistics } from "../../utils/withStatistics";

const Dashboard: NextPage = () => {
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} />
        <div id="appCapsule">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance">
                <div className="left">
                  <span className="title">Total University Ranking</span>
                  <h1 className="total">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faBriefcase}
                    />{" "}
                    {0}
                  </h1>
                </div>
                <div className="right flex">
                  <Link href="/dashboard/todos" legacyBehavior>
                    <a className="button">
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SchoolRanking />
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="dashboard" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync,withStatistics)(Dashboard);
