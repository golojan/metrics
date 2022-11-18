import { NextPage } from "next";
import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AppDrawer from "../../../serverlets/AppDrawer";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { compose } from "redux";
import { withDepartments } from "../../../utils/withInitialProps";

const $ = require("jquery");

const Departments: NextPage = ({ token }: any) => {
  return (
    <>
      <DashboardLayout>
        <AppHeader isroot={true} token={token} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance row">
                <div className="left">
                  <div className="action-sheet-content w-full">
                    <div className="form-group basic row">
                      <div className="input-wrapper col-12 ">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="text"
                          autoComplete="off"
                          placeholder="Search Departments"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right flex">
                  <Link href="/dashboard/intakes/add" legacyBehavior>
                    <a className="button">
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="row mt-2">
              <div className="col-12">
                <div className="stat-box">
                  <table className="table table-striped display table-bordered w-full">
                    <thead>
                      <tr>
                        <th>-</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>-</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {intakes.data.map((intake: AccountInfo, i: number) => (
                        <tr key={i}>
                          <td>
                            <img
                              src={`${intake.avatar}`}
                              width={33}
                              alt="rrdd"
                            />
                          </td>
                          <td>
                            <strong className="text-green-600">
                              {intake.lastname}
                            </strong>
                            {", "}
                            {intake.firstname} {intake.middlename}
                          </td>
                          <td>{intake.email}</td>
                          <td>{intake.mobile}</td>
                          <td className="justify-items-end">
                            <Link
                              href={`/dashboard/intakes/${intake._id}/profile`}
                              className="mx-1"
                            >
                              View
                            </Link>
                            <Link href="#" className="text-green-700 mx-1">
                              Edit
                            </Link>
                            <Link href="#" className="text-danger mx-1">
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))} */}
                    </tbody>

                    <tfoot>
                      <tr>
                        <th>-</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>-</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="departments" />
      </DashboardLayout>
    </>
  );
};

export default compose(withAuthSync, withDepartments)(Departments);
