import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { Logon } from "../../interfaces";
import { useAtom } from "jotai";
import { busyAtom, domainAtom, schoolAtom } from "../../store";
import { authLogin } from "../../utils/withAuthSync";
import { NextPage } from "next";
import DashboardLayout from "../../components/DashboardLayout";
import SiteBusy from "../../components/SiteBusy";

const University: NextPage = () => {
  const [school, setSchool] = useAtom(schoolAtom);

  const router = useRouter();
  const [, setBusy] = useAtom(busyAtom);
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   alert(domain);
  // }, []);

  const [logon, setLogon] = useState<Logon>({
    username: "",
    password: "",
  });

  const adminLogon = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBusy(true);
    setErrorMsg("");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logon),
    });
    const { status, token } = await response.json();
    if (status) {
      authLogin({ token });
    } else {
      setErrorMsg("Invalid Username and Password.");
    }
    setBusy(false);
  };

  return (
    <DashboardLayout>
      <SiteBusy />
      <div className="p-10">
        <div className="section mt-[50px] text-center">
          <h1>
            <Image
              className="img-responsive"
              width={80}
              height={80}
              src={`${school.logo}`}
              alt="Metrics AI Ranking Engine"
              style={{ margin: "0 auto" }}
            />
            <br />
            {school.name}
          </h1>
          <h4>Artifical Intelligence Education Ranking Engine</h4>
        </div>
        <div className="section mb-5 p-2">
          <form autoComplete="off" onSubmit={adminLogon} method="POST">
            <Card>
              <Card.Body className="pb-1">
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="username">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Your Email Address"
                      value={logon.username}
                      onChange={(e) =>
                        setLogon({ ...logon, username: e.target.value })
                      }
                    />
                    <i className="clear-input"></i>
                  </div>
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Your password"
                      value={logon.password}
                      onChange={(e) =>
                        setLogon({ ...logon, password: e.target.value })
                      }
                    />
                    <i className="clear-input"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="form-links mt-2">
              <div className="text-muted">
                <span className="mb-2 text-success">Connected</span>
              </div>
              <div>
                <a href="#" className="text-muted">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="form-button-group  transparent">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default University;
