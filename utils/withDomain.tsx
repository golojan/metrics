import React, { useEffect } from "react";

import { Dispatch } from "../store";
import { useDispatch } from "react-redux";

export const withDomain = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    useEffect(() => {
      const hostname = window.location.hostname;
      dispatch.settings.setDomain(hostname);
      const getSchoolInfo = async () => {
        const response = await fetch(`/api/schools/${hostname}/info`);
        const { status, data } = await response.json();
        if (status) {
          dispatch.settings.setSchool(data);
        }
      };
      getSchoolInfo();
    }, [dispatch.settings]);
    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: any) => {
    const { req } = ctx;
    // =================== Get hostnmame // ===================
    const { host } = req.headers;
    const domain = host.split(":", 1).pop();
    // =================== Get hostnmame // ===================
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, domain };
  };
  return Wrapper;
};
