import { NextPage } from "next";
import React, { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import AppDrawer from "../../../serverlets/AppDrawer";
import Image from "next/image";

import {
  faPlus,
  faUsersBetweenLines,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { compose } from "redux";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ShowChartButton from "../../../components/ShowChartButton";
import ChartComponent from "../../../components/ChartComponent";

import { TableVirtuoso, Virtuoso } from "react-virtuoso";
import { LineChart } from "../../../components/Charts";

const Lecturers: NextPage = () => {
  const { lecturers, lecturersCount } = useSelector(
    (state: RootState) => state.lecturers
  );
  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance row">
                <div className="left">
                  <span className="title">Manage Lecturers</span>
                  <h1 className="total">
                    <FontAwesomeIcon icon={faUsersCog} /> Lecturers
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
          <div className="section pt-1">
            <div className="row ">
              <div className="col-12 col-md-5 col-lg-3 fa-border">
                <div className="card-box border-0">
                  <h4>We move... {lecturersCount}</h4>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-9 min-h-screen">
                <Virtuoso
                  data={lecturers}
                  totalCount={lecturersCount}
                  itemContent={(index, lecturer) => (
                    <div
                      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 row-auto stat-box"
                      key={index}
                    >
                      <Image
                        src={`${lecturer.avatar}`}
                        alt="/"
                        width={70}
                        height={70}
                        className="float-left mr-2 imaged"
                      />
                      <ShowChartButton show={false} />
                      <div className="title my-0">
                        <strong className="text-black">
                          Political Science
                        </strong>
                      </div>
                      <h4 className="h3 my-0">
                        <strong className="text-green-700">
                          {lecturer.lastname}
                        </strong>
                        , {lecturer.firstname} {lecturer.middlename}
                      </h4>
                      <p>SEX: {lecturer.gender}</p>
                      <div className="float-right text-center absolute top-6 right-5 flex">
                        <h4 className="text-center mx-1">
                          <strong className="text-green-900 h2">
                            {lecturer.googlePresence}
                          </strong>
                          <br />
                          <small>g.scholar</small>
                        </h4>
                        <h4 className="text-center mx-1">
                          <strong className="text-green-900 h2">
                            {lecturer.citations}
                          </strong>
                          <br />
                          <small>citations</small>
                        </h4>
                        <h4 className="text-center mx-1">
                          <strong className="text-green-900 h2">
                            {lecturer.hindex}
                          </strong>
                          <br />
                          <small>h-index</small>
                        </h4>
                        <h4 className="text-center mx-1">
                          <strong className="text-green-900 h2">
                            {lecturer.i10hindex}
                          </strong>
                          <br />
                          <small>i10-h-index</small>
                        </h4>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="lecturers" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync)(Lecturers);
