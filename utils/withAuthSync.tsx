import React, { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { StudentStats, Token } from "../interfaces";

import { Dispatch } from "../store";
import { useDispatch } from "react-redux";

import { RootState } from "../store";
import { useSelector } from "react-redux";
import { div, perc } from "./math";

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
const loadStudentsStats = async (domain: string) => {
  const response = await fetch(`/api/students/${domain}/stats`);
  const stats = await response.json();
  return stats;
};

const loadLecturers = async (domain: string) => {
  const response = await fetch(`/api/lecturers/${domain}/list`);
  const lecturers = await response.json();
  return lecturers;
};
const loadLecturersStats = async (domain: string) => {
  const response = await fetch(`/api/lecturers/${domain}/stats`);
  const stats = await response.json();
  return stats;
};

const loadFaculties = async (domain: string) => {
  const response = await fetch(`/api/faculties/${domain}/list`);
  const faculties = await response.json();
  return faculties;
};
const loadFacultiesStats = async (domain: string) => {
  const response = await fetch(`/api/faculties/${domain}/stats`);
  const stats = await response.json();
  return stats;
};

const loadDepartments = async (domain: string) => {
  const response = await fetch(`/api/departments/${domain}/list`);
  const departments = await response.json();
  return departments;
};
const loadDepartmentsStats = async (domain: string) => {
  const response = await fetch(`/api/departments/${domain}/stats`);
  const stats = await response.json();
  return stats;
};

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();

    const { statistics_students } = useSelector(
      (state: RootState) => state.students
    );
    const { statistics_lecturers } = useSelector(
      (state: RootState) => state.lecturers
    );
    const { statistics_faculties } = useSelector(
      (state: RootState) => state.faculties
    );
    const { statistics_departments } = useSelector(
      (state: RootState) => state.departments
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
        // Get school info to state //

        // Load All Students //
        loadStudents(domain as string)
          .then((students) => {
            dispatch.students.setStudents(students.data);
            dispatch.students.setStudentsCount(students.data.length);
          })
          .catch();
        loadStudentsStats(domain as string)
          .then((stats: StudentStats) => {
            dispatch.students.setStatistics(stats);
            //Do other students maths and Stat Displays//
            dispatch.students.setAnalytics({
              STUDENT_TEACHER_RATIO: div(
                statistics_students.count as number,
                statistics_lecturers.count as number
              ),
              PERCENTAGE_FEMALE: perc(
                statistics_students.countFemale as number,
                statistics_students.count as number
              ),
              INTERNATIONAL_STUDENTS: perc(
                statistics_students.countIntl as number,
                statistics_students.count as number
              ),
            });
            //Do other students maths and Stat Displays//
          })
          .catch(); // Load All Students //

        // Load All Lecturers //
        loadLecturers(domain as string)
          .then((lecturers) => {
            dispatch.lecturers.setLecturers(lecturers.data);
            dispatch.lecturers.setLecturersCount(lecturers.data.length);
          })
          .catch();
        loadLecturersStats(domain as string)
          .then((stats) => {
            dispatch.lecturers.setStatistics(stats);
            //Do other lecturers maths and Stat Displays//
            dispatch.lecturers.setAnalytics({
              PERCENTAGE_FULL_ACCREDITATION: perc(
                statistics_lecturers.countFullPreffessors as number,
                statistics_lecturers.count as number
              ),
              INTERNATIONAL_LECTURERS: perc(
                statistics_lecturers.countIntl as number,
                statistics_lecturers.count as number
              ),
              FEMALE_LECTURERS: perc(
                statistics_lecturers.countFemale as number,
                statistics_lecturers.count as number
              ),
            });
            //Do other lecturers maths and Stat Displays//
          })
          .catch();
        // Load All Lecturers //

        // Load All Faculties //
        loadFaculties(domain as string)
          .then((faculties) => {
            dispatch.faculties.setFaculties(faculties.data);
            dispatch.faculties.setFacultiesCount(faculties.data.length);
          })
          .catch();
        loadFacultiesStats(domain as string)
          .then((stats) => {
            dispatch.faculties.setStatistics(stats);
            //Do other faculties maths and Stat Displays//
            dispatch.faculties.setAnalytics({});
            //Do other faculties maths and Stat Displays//
          })
          .catch();
        // Load All Faculties //

        // Load All Departments //
        loadDepartments(domain as string)
          .then((departments) => {
            dispatch.departments.setDepartments(departments.data);
            dispatch.departments.setDepartmentsCount(departments.data.length);
          })
          .catch();
        loadDepartmentsStats(domain as string)
          .then(async (stats) => {
            await dispatch.departments.setStatistics(stats);
            //Do other departments maths and Stat Displays//
            await dispatch.departments.setAnalytics({
              FULL_ACCREDITATION: perc(
                statistics_departments.countAccredited as number,
                statistics_departments.count as number
              ),
            });
            //Do other departments maths and Stat Displays//
          })
          .catch(); // Load All Departments //
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
      statistics_lecturers.count,
      statistics_students.count,
      statistics_students.countFemale,
      statistics_students.countIntl,
      statistics_departments.countAccredited,
      statistics_departments.countNonAccredited,
      statistics_departments.count,
      statistics_lecturers.countFemale,
      statistics_lecturers.countFullPreffessors,
      statistics_lecturers.countIntl,
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
