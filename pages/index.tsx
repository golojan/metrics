import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { Logon } from "../interfaces";
import { NextPage } from "next";
import Layout from "../components/Layout";
import SiteBusy from "../components/SiteBusy";

import { authLogin } from "../utils/withAuthSync";

const Home: NextPage = () => {
  const [school, setSchool] = useState({
    name: "",
    shortname: "",
    domain: "",
    logo: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [logon, setLogon] = useState<Logon>({
    username: "",
    password: "",
  });

  useEffect(() => {
    const domainInfo = async () => {
      const result = await fetch(`/api/schools/info`);
      const { status, data, domain } = await result.json();
      if (status) {
        setSchool(data);
      }
    };
    domainInfo();
  }, []);

  const adminLogon = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logon),
    });
    const { status, token, domain } = await response.json();
    if (status) {
      authLogin({ token, domain });
    } else {
      setErrorMsg("Invalid Username and Password.");
    }
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
              src={`${school.logo}`}
              alt={`${school.shortname}`}
              style={{ margin: "0 auto" }}
            />
            <br />
            <div>{school.name}</div>
            <div className="small">Metrics AI Ranking Engine</div>
          </h1>
          <h4>Artifical Intelligence Education Ranking Engine</h4>
        </div>

        <div className="section mb-5 p-2">
          <div className="text-red-600 text-center">{errorMsg}</div>
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

export default Home;
