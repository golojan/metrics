import React, { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";

import cookie from "js-cookie";
import { Token } from "../interfaces";

import { Dispatch } from "../store";
import { useDispatch } from "react-redux";

import { RootState } from "../store";
import { useSelector } from "react-redux";

import { getAccountInfo, getSchoolInfo } from "./queries";

// Login & Create session for a given minutes time
export const authLogin = ({ token, domain }: Token) => {
  const expire_time: any = process.env.NEXT_PUBLIC_COOKIE_TIME_IN_MINS || 10;
  const inMinutes = new Date(new Date().getTime() + expire_time * 60 * 1000);

  cookie.set("token", token as string, { expires: inMinutes });
  cookie.set("domain", domain as string, { expires: inMinutes });

  const owner_domain = process.env.NEXT_PUBLIC_OWNER_DOMAIN;
  if (domain === owner_domain) {
    Router.push("/admin");
  } else {
    Router.push("/dashboard");
  }
};

export const auth = (ctx: any) => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (ctx.req && !token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return token;
};

export const hasAuth = (ctx: any) => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (ctx.req && !token) {
    if (typeof window === "undefined") {
      return false;
    } else {
      return false;
    }
  }
  return true;
};

export const authlogout = () => {
  cookie.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", `${Date.now()}`);
  Router.push("/?~out+");
};

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();

    const { statistics_school, user } = useSelector(
      (state: RootState) => state.settings
    );

    const syncLogout = (event: any) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      const token = cookie.get("token");
      const domain = cookie.get("domain");

      if (token && domain) {
        dispatch.settings.setBusy(true);

        dispatch.settings.setIsLogged(true);
        dispatch.settings.setAccid(token);
        dispatch.settings.setDomain(domain as string);

        // Get account info to state //
        getAccountInfo(token)
          .then((info) => {
            dispatch.settings.setUserInfo(info);
          })
          .catch();
        // Get account info to state //
        // ========================== //

        // Get school info to state //
        getSchoolInfo(domain as string)
          .then((school) => {
            dispatch.settings.setSchool(school.data);
          })
          .catch();

        dispatch.settings.setBusy(false);
      } else {
        authlogout();
      }

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, [
      dispatch.settings,
      dispatch.students,
      dispatch.lecturers,
      dispatch.departments,
      dispatch.faculties,
    ]);

    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: any) => {
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };
  return Wrapper;
};
