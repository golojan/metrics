import { NextPage } from "next";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AppDrawer from "../../../serverlets/AppDrawer";
import { AccountRoles, AccountTypes } from "../../../interfaces/enums";

import { faUserAltSlash, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { useAtom } from "jotai";
import { busyAtom, newUserAtom } from "../../../store";
import { useRouter } from "next/router";

const NewUser: NextPage = ({ token, userinfo }: any) => {
  const router = useRouter();

  const [newuser, setNewUser] = useAtom(newUserAtom);
  const [, setBusy] = useAtom(busyAtom);
  const [errorMsg, setErrorMsg] = useState("");

  const registerNewUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setBusy(true);
    setErrorMsg("");
    const response = await fetch("/api/accounts/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
    const { status, accid } = await response.json();
    if (status) {
      router.push(`/dashboard/users`);
    } else {
      setErrorMsg(
        "Registration of new user failed. Check your entry and retry again short"
      );
    }
    setBusy(false);
  };
  return (
    <>
      <Layout>
        <AppHeader isroot={true} token={token} />
        <div id="appCapsule" className="mb-5">
          <form onSubmit={registerNewUser} autoComplete={"off"}>
            <div className="section wallet-card-section pt-1">
              <div className="wallet-card">
                <div className="balance">
                  <div className="left">
                    <span className="title">Total Revenue</span>
                    <h1 className="total">N 0.00</h1>
                  </div>
                  <div className="right flex">
                    <Link href="/dashboard/users" legacyBehavior>
                      <a className="button">
                        <FontAwesomeIcon icon={faUserCog} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="row mt-2">
                <div className="col-12 my-1 col-md-6  col-lg-6">
                  <div className="stat-box">
                    <div className="action-sheet-content">
                      <div className="form-group basic row">
                        <div className="input-wrapper col-6 my-2">
                          <label className="label" htmlFor="lastname">
                            SURNAME
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="lastname"
                            value={newuser.lastname}
                            placeholder="Enter Surname"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                lastname: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="input-wrapper col-6 my-2">
                          <label className="label" htmlFor="firstname">
                            FIRST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="firstname"
                            value={newuser.firstname}
                            placeholder="Enter Firstname"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                firstname: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="input-wrapper col-12 my-2">
                          <label className="label" htmlFor="middlename">
                            Middle Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="middlename"
                            value={newuser.middlename}
                            placeholder="Middle Name"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                middlename: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group basic row">
                        <div className="input-wrapper col-12">
                          <label className="label">Email Address</label>
                          <input
                            type="email"
                            required={true}
                            id="email"
                            value={newuser.email}
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group basic row">
                        <div className="input-wrapper col-12">
                          <label className="label">Mobile Number</label>
                          <input
                            type="tel"
                            required={true}
                            id="mobile"
                            value={newuser.mobile}
                            className="form-control form-control-lg"
                            placeholder="Mobile Number"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                mobile: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 my-1 col-md-6 col-lg-6">
                  <div className="stat-box">
                    <div className="action-sheet-content">
                      <div className="form-group basic row">
                        <div className="input-wrapper col-12">
                          <label className="label" htmlFor="membership">
                            Select User Type
                          </label>
                          <select
                            className="form-control custom-select form-control-lg"
                            id="membership"
                            defaultValue={AccountTypes.ADMIN}
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                membership: e.target.value,
                              })
                            }
                          >
                            <option selected value={AccountTypes.ADMIN}>
                              {AccountTypes.ADMIN}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group basic row">
                        <div className="input-wrapper col-12">
                          <label className="label" htmlFor="role">
                            Select User Role
                          </label>
                          <select
                            className="form-control custom-select form-control-lg"
                            id="role"
                            defaultValue={newuser.role}
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                role: e.target.value,
                              })
                            }
                          >
                            <option selected value={AccountRoles.USER}>
                              {AccountRoles.USER}
                            </option>
                            <option selected value={AccountRoles.ADMIN}>
                              {AccountRoles.ADMIN.valueOf()}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group basic row">
                        <div className="input-wrapper col-12">
                          <label className="label">Login Password</label>
                          <input
                            type="text"
                            required={true}
                            id="password"
                            value={newuser.password}
                            className="form-control form-control-lg"
                            placeholder="Login Password"
                            onChange={(e) =>
                              setNewUser({
                                ...newuser,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group basic">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-lg"
                        >
                          Deposit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="intakes" />
      </Layout>
    </>
  );
};

export default withAuthSync(NewUser);
