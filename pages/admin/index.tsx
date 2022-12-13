import { NextPage } from "next";
import React from "react";
import AppDrawerAdmin from "../../serverlets/AppDrawerAdmin";
import OwnerLayout from "../../components/OwnerLayout";

import { faPlus, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeaderAdmin from "../../serverlets/AppHeaderAdmin";
import Copyright from "../../serverlets/Copyright";
import { withAuthSync } from "../../utils/withAuthSync";

const Dashboard: NextPage = () => {
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
                  <h1 className="total">Welcome Sir</h1>
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
          <div className="section pt-1">
            <div className="row">
              <div className="col-3">
                <div className="wallet-card p-2">
ww
                </div>
              </div>
              <div className="col-9"></div>
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
