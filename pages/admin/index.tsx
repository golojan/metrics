import { NextPage } from "next";
import React from "react";
import AppDrawerAdmin from "../../serverlets/AppDrawerAdmin";
import OwnerLayout from "../../components/OwnerLayout";

import { faBriefcase, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeaderAdmin from "../../serverlets/AppHeaderAdmin";
import Copyright from "../../serverlets/Copyright";
import { withAuthSync } from "../../utils/withAuthSync";

const Dashboard = () => {
  return (
    <>
      <OwnerLayout>
        <AppHeaderAdmin isroot={true} />
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
          <Copyright />
        </div>
        <AppDrawerAdmin onchat={false} menuitem="dashboard" />
      </OwnerLayout>
    </>
  );
};

export default withAuthSync(Dashboard);
