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
import { getDomain } from "./queries";

const getSchoolInfo = async (domain: string) => {
  const response = await fetch(`/api/schools/${domain}/info`);
  const userinfo = await response.json();
  return userinfo;
};

export const withDomain = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    const { school } = useSelector((state: RootState) => state.settings);
    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: any) => {
    const { rawHeaders } = ctx;

    // Try capture domain //
    // const { host } = response.headers;

    console.log(rawHeaders);

    // const domain = getDomain(host as string);
    // const result = await fetch(
    //   `${process.env.DOMAIN}/api/schools/${domain}/info`
    // );
    // const _school = await result.json(); // Try capture domain //
    // const school = _school.data;

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };
  return Wrapper;
};
