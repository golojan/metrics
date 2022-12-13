import { NextPage } from "next";
import React from "react";
import OwnerLayout from "../../../components/OwnerLayout";
import AppDrawerAdmin from "../../../serverlets/AppDrawerAdmin";
import AppHeaderAdmin from "../../../serverlets/AppHeaderAdmin";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { fetcher } from "../../../utils/fetcher";
import useSWR from "swr";

const Schools: NextPage = () => {
  const { data, error } = useSWR("/api/schools/list", fetcher);
  return (
    <>
      <OwnerLayout>
        <AppHeaderAdmin isroot={true} />
        <div id="appCapsule">
          <div className="section w-full mt-10">
            <div className="row ">
              <div className="col-12 col-lg-3 col-xl-3 col-xxl-3"></div>
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 text-center items-center">
                <h1>Schools</h1>
                <div className="m-3">
                  {data
                    ? data.schools.map((school: any, index: number) => (
                        <div key={index} className="wallet-card">
                          <h1>{school.name}</h1>
                        </div>
                      ))
                    : null}
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
