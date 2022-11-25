import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { domainAtom, schoolAtom } from "../store";
import { NextPageContext } from "next";

export const withUniversity = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [domain, setDomain] = useAtom(domainAtom);
    const [school, setSchool] = useAtom(schoolAtom);
    useEffect(() => {
      const getSchoolInfo = async () => {
        const response = await fetch(`/api/schools/${domain}/info`);
        const { status, data } = await response.json();
        if (status) {
          setSchool(data);
        }
      };
      getSchoolInfo();
    }, [setSchool, domain]);
    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: NextPageContext) => {
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };
  return Wrapper;
};

export const withDomain = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [, setDomain] = useAtom(domainAtom);
    useEffect(() => {
      const hostname = window.location.hostname;
      return () => {
        setDomain(hostname);
      };
    }, [setDomain]);
    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: NextPageContext) => {
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
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
