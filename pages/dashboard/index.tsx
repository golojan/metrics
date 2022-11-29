import { NextPage } from "next";
import React, { useEffect } from "react";
import AppDrawer from "../../serverlets/AppDrawer";
import AdminLayout from "../../components/AdminLayout";

import {
  faBriefcase,
  faPlus,
  faSchool,
  faSchoolCircleCheck,
  faUsersBetweenLines,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../serverlets/AppHeader";
import Copyright from "../../serverlets/Copyright";
import { withAuthSync } from "../../utils/withAuthSync";
import AppAnalytics from "../../serverlets/AppAnalytics";
import AppSummary from "../../serverlets/AppSummary";

import SchoolRanking from "../../serverlets/SchoolRanking";

import { Dispatch } from "../../store";
import { useDispatch } from "react-redux";

const Dashboard: NextPage = ({ token, school }: any) => {
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    if (school) {
      dispatch.settings.setSchool(school);
    }
  });

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
                    568.90
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

              <div className="wallet-footer">
                <div className="item">
                  <Link href="/dashboard/faculties" legacyBehavior>
                    <a>
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faSchool} />
                      </div>
                      <strong>All Faculties</strong>
                    </a>
                  </Link>
                </div>
                <div className="item">
                  <Link href="/dashboard/departments" legacyBehavior>
                    <a>
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faSchoolCircleCheck} />
                      </div>
                      <strong>All Departments</strong>
                    </a>
                  </Link>
                </div>
                <div className="item">
                  <Link href="/dashboard/lecturers" legacyBehavior>
                    <a>
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faUsersGear} />
                      </div>
                      <strong>All Lecturers</strong>
                    </a>
                  </Link>
                </div>

                <div className="item">
                  <Link href="/dashboard/students" legacyBehavior>
                    <a>
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faUsersBetweenLines} />
                      </div>
                      <strong>All Students</strong>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SchoolRanking />
          <AppAnalytics />
          <AppSummary />

          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="dashboard" />
      </AdminLayout>
    </>
  );
};

export default withAuthSync(Dashboard);
