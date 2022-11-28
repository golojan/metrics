import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import AppDrawer from "../../../serverlets/AppDrawer";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import AppHeader from "../../../serverlets/AppHeader";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";
import { loadUsers } from "../../../utils/queries";

const Users: NextPage = ({ token }: any) => {
  const [done, setDone] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
      .then((_users: any) => {
        setUsers(_users);
        setDone(true);
      })
      .catch();
  }, [done]);

  return (
    <>
      <AdminLayout>
        <AppHeader isroot={true} token={token} />
        <div id="appCapsule" className="mb-5">
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              <div className="balance">
                <div className="left">
                  <span className="title">Total Revenue</span>
                  <h1 className="total">N 0.00</h1>
                </div>
                <div className="right flex">
                  <Link href="/dashboard/users/add" legacyBehavior>
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
              {users.map((user: any, index: number) => (
                <div
                  key={index}
                  className="col-4 my-1 col-md-1 m-xl-1 col-lg-1"
                >
                  <a href="#">
                    <div className="user-card">
                      <img
                        src={`${user.avatar}`}
                        alt="img"
                        className="imaged w-100"
                      />
                      <strong>{user.lastname}</strong>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <Copyright />
        </div>
        <AppDrawer onchat={false} menuitem="intakes" />
      </AdminLayout>
    </>
  );
};

export default withAuthSync(Users);
