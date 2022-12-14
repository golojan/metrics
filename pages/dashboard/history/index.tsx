import { NextPage } from "next";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import { compose } from "redux";

import useHistory from "../../../libs/hooks/useHistory";

import {
  faDownLong,
  faPlus,
  faSchoolCircleCheck,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import AppDrawer from "../../../serverlets/AppDrawer";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import RankingHostoryTable from "../../../components/RankingHostoryTable";

const RankingsHistory: NextPage = () => {
  const { school, ranking } = useSelector((state: RootState) => state.settings);
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="wallet-footer">
                <div className="item">
                  <div>
                    <span className="h1">{ranking.googlePresence}</span>
                    <strong>Googgle Presence</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">{ranking.citations}</span>
                    <strong>Citations</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">{ranking.hindex}</span>
                    <strong>H-Index</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">{ranking.i10hindex}</span>
                    <strong>i10-H-Index</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section pt-1">
            <div className="row ">
              <div className="col-12 col-md-12 col-lg-12 min-h-screen">
                <RankingHostoryTable history={school.history} />
                {/* <LiveRankingTable school={school} allschools={allschools} /> */}
              </div>
            </div>
          </div>

          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="dashboard" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync)(RankingsHistory);
