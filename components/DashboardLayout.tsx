import React, { Component, ReactNode } from "react";
import Head from "next/head";
import { useIdleTimer } from "react-idle-timer";

interface MyProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: MyProps) => {
  const onIdle = () => {};

  const idleTimer = useIdleTimer({ onIdle });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Admin | Metics AI Ranking Engine</title>
      </Head>
      {children}
    </>
  );
};
export default DashboardLayout;
