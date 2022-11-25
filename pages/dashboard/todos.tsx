import { NextPage } from "next";
import React from "react";
import AppDrawer from "../../serverlets/AppDrawer";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../serverlets/AppHeader";
import Copyright from "../../serverlets/Copyright";
import { withAuthSync } from "../../utils/withAuthSync";

import AdminLayout from "../../components/AdminLayout";
import DashboardMenu from "../../components/DashboardMenu";

const ToDos: NextPage = ({ token }: any) => {
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} token={token} />
        <div id="appCapsule">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance">
                <div className="left">
                  <span className="title">Cloud Functions</span>
                  <h1 className="total">Prime Intakes: App</h1>
                </div>
                <div className="right flex">
                  <Link href="/dashboard" legacyBehavior>
                    <a className="button">
                      <FontAwesomeIcon icon={faHome} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="row mt-2">
              <DashboardMenu />
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="dashboard" />
      </AdminLayout>
    </>
  );
};

export default withAuthSync(ToDos);
