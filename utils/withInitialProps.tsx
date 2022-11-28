import React, { useEffect } from "react";

import { RootState, Dispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const withUniversity = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    const domain = useSelector((state: RootState) => state.settings.domain);
    useEffect(() => {
      const getSchoolInfo = async () => {
        const response = await fetch(`/api/schools/${domain}/info`);
        const { status, data } = await response.json();
        if (status) {
          dispatch.settings.setSchool(data);
        }
      };
      getSchoolInfo();
    }, [dispatch.settings, domain]);
    return <WrappedComponent {...props} />;
  };
  return withDomain(Wrapper);
};

export const withDomain = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const dispatch = useDispatch<Dispatch>();
    useEffect(() => {
      const hostname = window.location.hostname;
      return () => {
        dispatch.settings.setDomain(hostname);
      };
    }, [dispatch.settings]);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export const withFaculties = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
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

export const withDepartments = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
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

export const withLecturers = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
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

export const withStudents = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
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
