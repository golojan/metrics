import React from "react";

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
