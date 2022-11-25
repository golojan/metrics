import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { domainAtom, schoolAtom } from "../store";

export const withUniversity = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [domain] = useAtom(domainAtom);
    const [, setSchool] = useAtom(schoolAtom);
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
  return withDomain(Wrapper);
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
