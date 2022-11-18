import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { Logon } from "../interfaces";
import { useAtom } from "jotai";
import { busyAtom } from "../store";
import { authLogin } from "../utils/withAuthSync";
import { NextPage } from "next";
import Layout from "../components/Layout";

const ErrorPage: NextPage = () => {
  const router = useRouter();

  const [, setBusy] = useAtom(busyAtom);
  const [errorMsg, setErrorMsg] = useState("");

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
    <Layout>
      <div>
        <div className="section">
          <div className="splash-page mt-5 mb-5">
            <div className="section mt-[50px] text-center">
              <h1>
                <Image
                  className="img-responsive"
                  width={80}
                  height={80}
                  src="/assets/img/logo-icon.png"
                  alt="logo"
                  style={{ margin: "0 auto" }}
                />
                <br />
                Prime Admin
              </h1>
              <h4>2FA is required to log in</h4>
            </div>
            <h1>404</h1>
            <h2 className="mb-2">Page not found!</h2>
            <p>
              We are very sorry you hit the wall on this. Can you recheck the
              link and try again.
            </p>
          </div>
        </div>
        <div className="fixed-bar">
          <div className="row">
            <div className="col-6">
              <a
                href={"/"}
                className="btn btn-lg btn-outline-secondary btn-block goBack"
              >
                Go Back
              </a>
            </div>
            <div className="col-6">
              <a href={"#"} className="btn btn-lg btn-primary btn-block">
                Try Again
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
