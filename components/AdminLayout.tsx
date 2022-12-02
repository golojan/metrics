import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import cookie from "js-cookie";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { Dispatch } from "../store";
import { StudentStats } from "../interfaces";
import { div, perc } from "../utils/math";

interface MyProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: MyProps) => {
  const { statistics_students } = useSelector(
    (state: RootState) => state.students
  );
  const { statistics_lecturers } = useSelector(
    (state: RootState) => state.lecturers
  );
  // const { statistics_faculties } = useSelector(
  //   (state: RootState) => state.faculties
  // );
  const { statistics_departments } = useSelector(
    (state: RootState) => state.departments
  );

  const { school, isLogged } = useSelector(
    (state: RootState) => state.settings
  );
  const { name, shortname } = school;

  const dispatch = useDispatch<Dispatch>();

  // useEffect(() => {
  //   setInterval(async () => {
  //     const token = await cookie.get("token");
  //     if (!token && !isLogged) {
  //       //Logout
  //       await authlogout();
  //       //Logout
  //     }
  //   }, 10000);
  // }, [isLogged]);

  useEffect(() => {
    const token = cookie.get("token");
    const domain = cookie.get("domain");
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`${shortname} | ${name}`}</title>
      </Head>
      {children}
    </>
  );
};
export default AdminLayout;
