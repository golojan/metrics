import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { domainAtom } from "../store";
import { NextPageContext } from "next";

export const withDomain = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [domain, setDomain] = useAtom(domainAtom);
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
    // const domain = process.env.DOMAIN;
    // const response = await fetch(`${domain}/api/accounts/list_intakes`);
    // const intakes = await response.json();
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
    // const domain = process.env.DOMAIN;
    // const response = await fetch(`${domain}/api/accounts/list_intakes`);
    // const intakes = await response.json();
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
    // const domain = process.env.DOMAIN;
    // const response = await fetch(`${domain}/api/accounts/list_intakes`);
    // const intakes = await response.json();
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
    // const domain = process.env.DOMAIN;
    // const response = await fetch(`${domain}/api/accounts/list_intakes`);
    // const intakes = await response.json();
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };
  return Wrapper;
};
