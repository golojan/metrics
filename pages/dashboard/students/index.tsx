import { NextPage } from "next";
import React, { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import AppDrawer from "../../../serverlets/AppDrawer";
import Image from "next/image";

import {
  faAreaChart,
  faPlus,
  faUsersBetweenLines,
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

const Students: NextPage = () => {
  const { students, studentsCount } = useSelector(
    (state: RootState) => state.students
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
          <div className="section pt-1">
            <div className="row ">
              <div className="col-12 col-md-5 col-lg-3">
                <div className="card-box border-0">
                  <h4>We move... {studentsCount}</h4>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-9 min-h-screen">
                <Virtuoso
                  data={students}
                  totalCount={studentsCount}
                  itemContent={(index, student) => (
                    <div
                      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 stat-box"
                      key={index}
                    >
                      <Image
                        src={`${student.avatar}`}
                        alt="/"
                        width={300}
                        height={300}
                      />
                      <ShowChartButton show={true} />
                      <div className="title">
                        <strong className="text-black">
                          <strong className="text-blue-800">DEPARTMENT</strong>:
                          Political Science
                        </strong>
                      </div>
                      <h2 className="total mt-2">
                        <FontAwesomeIcon
                          className="text-secondary"
                          icon={faAreaChart}
                        />{" "}
                        Agu Chux Kenechukwu
                      </h2>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="students" />
      </AdminLayout>
    </>
  );
};

export default compose(withAuthSync)(Students);
