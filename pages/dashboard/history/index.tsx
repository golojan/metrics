import { NextPage } from "next";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";

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
import LiveRankingTable from "../../../components/LiveRankingTable";

import allschools from "../../../data/nuc-2021.json";
import { getLiveStats } from "../../../utils/queries";

const RankingsHistory: NextPage = () => {
  const { school } = useSelector((state: RootState) => state.settings);
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance row">
                <div className="left">
                  <span className="title">Ranking History</span>
                  <h1 className="total m-0 p-0">
                    <FontAwesomeIcon icon={faSchoolCircleCheck} />{" "}
                    <span
                      className={`${
                        0 <= getLiveStats(allschools, 0)?.mid
                          ? " text-red-600 hover:text-red-200 hover:shadow-red-600 h-[90%]"
                          : " text-green-600 hover:text-green-200 hover:shadow-green-600 h-[90%]"
                      }`}
                    >
                      0.00
                    </span>
                  </h1>
                  <span>
                    {getLiveStats(allschools, 0)?.dir === "up" ? (
                      <>
                        <FontAwesomeIcon
                          className="text-green-600"
                          icon={faUpLong}
                        />{" "}
                        Up by{" "}
                        <span className="text-green-600">
                          {getLiveStats(allschools, 0)?.perc}
                        </span>
                        %
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="text-red-600"
                          icon={faDownLong}
                        />{" "}
                        Down by{" "}
                        <span className="text-red-600">
                          {getLiveStats(allschools, 0)?.perc}
                        </span>
                        %
                      </>
                    )}
                  </span>
                </div>

                <div className="right flex">
                  <Link href="#" legacyBehavior>
                    <a className="button ">
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="wallet-footer">
                <div className="item">
                  <div>
                    <span className="h1">
                      {school?.ranking?.googlePresence as number}
                    </span>
                    <strong>Googgle Presence</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">
                      {school?.ranking?.citations as number}
                    </span>
                    <strong>Citations</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">
                      {school?.ranking?.hindex as number}
                    </span>
                    <strong>H-Index</strong>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <span className="h1">
                      {school?.ranking?.i10hindex as number}
                    </span>
                    <strong>i10-H-Index</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section pt-1">
            <div className="row ">
              <div className="col-12 col-md-12 col-lg-12 min-h-screen">
                <LiveRankingTable school={school} allschools={allschools} />
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

export default withAuthSync(RankingsHistory);
