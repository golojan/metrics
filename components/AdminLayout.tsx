import React, { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";

import { useSelector } from "react-redux";
import { RootState } from "../store";

interface MyProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: MyProps) => {
  const { school } = useSelector((state: RootState) => state.settings);
  const { name, shortname } = school;
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
      <Script src="/assets/js/base.js" strategy="lazyOnload" />
    </>
  );
};
export default AdminLayout;
