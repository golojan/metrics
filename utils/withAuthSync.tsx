import React, { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { Token } from "../interfaces";

import { Dispatch } from "../store";
import { useDispatch } from "react-redux";

// Login & Create session for a given minutes time
export const authLogin = ({ token, domain }: Token) => {
  const expire_time: any = process.env.COOKIE_TIME_IN_MINS || 10;
  const inMinutes = new Date(new Date().getTime() + expire_time * 60 * 1000);
  cookie.set("token", token as string, { expires: inMinutes });
  cookie.set("domain", domain as string, { expires: inMinutes });
  Router.push("/dashboard");
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

const getAccountInfo = async (_token: string) => {
  const response = await fetch(`/api/accounts/${_token}/info`);
  const userinfo = await response.json();
  return userinfo;
};

const getSchoolInfo = async (domain: string) => {
  const response = await fetch(`/api/schools/${domain}/info`);
  const userinfo = await response.json();
  return userinfo;
};

const loadStudents = async (domain: string) => {
  const response = await fetch(`/api/students/${domain}/list`);
  const students = await response.json();
  return students;
};

const loadLecturers = async (domain: string) => {
  const response = await fetch(`/api/lecturers/${domain}/list`);
  const lecturers = await response.json();
  return lecturers;
};

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    const syncLogout = (event: any) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      const token = cookie.get("token");
      if (token) {
        dispatch.settings.setIsLogged(true);
        dispatch.settings.setAccid(token);
        // Get account info to state //
        getAccountInfo(token)
          .then((info) => {
            dispatch.settings.setUserInfo(info);
          })
          .catch();
        // Get account info to state //
        // ========================== //
      } else {
        authlogout();
      }

      const domain = cookie.get("domain");
      dispatch.settings.setDomain(domain as string);
      // Get school info to state //
      getSchoolInfo(domain as string)
        .then((school) => {
          dispatch.settings.setSchool(school.data);
        })
        .catch();
      // Get school info to state //

      // Load All Students //
      loadStudents(domain as string)
        .then((students) => {
          dispatch.students.setStudents(students.data);
          dispatch.students.setStudentsCount(students.data.length);
        })
        .catch();
      // Load All Students //

      // Load All Lecturers //
      loadLecturers(domain as string)
        .then((lecturers) => {
          dispatch.lecturers.setLecturers(lecturers.data);
          dispatch.lecturers.setLecturersCount(lecturers.data.length);
        })
        .catch();
      // Load All Lecturers //

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, [dispatch.settings, dispatch.students, dispatch.lecturers]);

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
