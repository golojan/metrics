import { NextPage } from "next";
import React from "react";
import OwnerLayout from "../../../components/OwnerLayout";
import AppDrawerAdmin from "../../../serverlets/AppDrawerAdmin";
import AppHeaderAdmin from "../../../serverlets/AppHeaderAdmin";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { fetcher } from "../../../utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

const Schools: NextPage = () => {
  const { data, error, isLoading } = useSWR("/api/schools/list", fetcher);
  return (
    <>
      <OwnerLayout>
        <AppHeaderAdmin isroot={true} />
        <div id="appCapsule">
          <div className="section w-full mt-10">
            <div className="row ">
              <div className="col-12 col-lg-3 col-xl-3 col-xxl-3"></div>
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 text-center items-center">
                <div className="wallet-card">
                  <h1>Manage Schools</h1>
                </div>
                <div className="m-3 text-left items-left">
                  <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                      <tr>
                        <th>SHORTNAME</th>
                        <th>NAME</th>
                        <th>DOMAIN</th>
                        <th>-</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <h1>Loading...</h1>
                      ) : (
                        data.schools.map((school: any, index: number) => (
                          <tr key={index}>
                            <td scope="row">{school.shortname}</td>
                            <td>{school.name}</td>
                            <td>{school.domain}</td>
                            <td>
                              <Link
                                href={`/admin/schools/${school.domain}/edit`}
                                className="mx-2 text-success"
                              >
                                edit
                              </Link>
                              <Link
                                href={`/admin/schools/${school.domain}/view`}
                                className="mx-2 text-primary"
                              >
                                configure
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-xl-3 col-xxl-3"></div>
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawerAdmin onchat={false} menuitem="dashboard" />
      </OwnerLayout>
    </>
  );
};

export default withAuthSync(Schools);
