import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { Logon } from "../interfaces";
import { authLogin } from "../utils/withAuthSync";
import { NextPage } from "next";
import Layout from "../components/Layout";
import SiteBusy from "../components/SiteBusy";

import { RootState, Dispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = ({ status, domain, school }: any) => {
  const dispatch = useDispatch<Dispatch>();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [logon, setLogon] = useState<Logon>({
    domain: domain,
    username: "",
    password: "",
  });
  const adminLogon = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch.settings.setBusy(true);
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
    dispatch.settings.setBusy(false);
  };
  return (
    <Layout>
      <SiteBusy />
      <div className="p-10">
        <div className="section mt-[50px] text-center">
          <h1>
            <Image
              className="img-responsive"
              width={80}
              height={80}
              src="/assets/img/logo-icon.png"
              alt="Metrics AI Ranking Engine"
              style={{ margin: "0 auto" }}
            />
            <br />
            Metrics Admin
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
                <span className="text-black">
                  Status: <span className="mb-2 text-success">Connected</span>
                </span>
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
    </Layout>
  );
};

Home.getInitialProps = async (ctx: any) => {
  const { req } = ctx;
  // =================== Get hostnmame // ===================
  const { host } = req.headers;
  const domain = host.split(":", 1).pop();
  // =================== Get hostnmame // ===================
  const { DOMAIN } = process.env;
  const response = await fetch(`${DOMAIN}/api/schools/${domain}/info`);
  const { status, data } = await response.json();
  return { status: status, domain: domain, school: data };
};

export default Home;
