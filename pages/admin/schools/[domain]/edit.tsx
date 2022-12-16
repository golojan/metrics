import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import OwnerLayout from "../../../../components/OwnerLayout";
import AppDrawerAdmin from "../../../../serverlets/AppDrawerAdmin";
import AppHeaderAdmin from "../../../../serverlets/AppHeaderAdmin";
import Copyright from "../../../../serverlets/Copyright";
import { withAuthSync } from "../../../../utils/withAuthSync";
import { fetcher } from "../../../../utils/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";

const School: NextPage = () => {
  const router = useRouter();
  const { domain } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/schools/${domain}/info`,
    fetcher
  );
  const [edit, setEdit] = useState<typeof data>({ ...data });

  useEffect(() => {
    setEdit(data);
  }, [data]);

  const saveSchool = async (e: any) => {
    e.preventDefault();
    alert(0);
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(edit),
    // });
    // const { status, token, domain } = await response.json();
  };

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
                  <h1>
                    Edit School <br />
                    <small>{edit.name}</small>
                  </h1>
                </div>
                <div className="wallet-card mt-3">
                  {isLoading ? (
                    <h1>loading...</h1>
                  ) : (
                    <div className="stat-box mt-2 min-h-[100px] w-full border-fuchsia-500 shadow bg-gray-400">
                      <form onSubmit={saveSchool}>
                        <div className="row">
                          <div className="col-6">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-1">
                              <input
                                type="text"
                                className="form-control relative flex-auto min-w-0 block text-md w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={`Short Name`}
                                value={edit.shortname}
                                onChange={(e) =>
                                  setEdit({
                                    ...edit,
                                    shortname: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-1">
                              <input
                                type="text"
                                required={true}
                                className="form-control relative flex-auto min-w-0 block text-md w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={`Domain`}
                                value={edit.domain}
                                onChange={(e) =>
                                  setEdit({
                                    ...edit,
                                    domain: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-1">
                              <input
                                type="text"
                                required={true}
                                className="form-control relative flex-auto min-w-0 block text-md w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={`Name`}
                                value={edit.name}
                                onChange={(e) =>
                                  setEdit({ ...edit, name: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              type={"submit"}
                              className="btn btn-primary h-full relative flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:outline-none"
                            >
                              Update School
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3"></div>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawerAdmin onchat={false} menuitem="dashboard" />
      </OwnerLayout>
    </>
  );
};

export default withAuthSync(School);
