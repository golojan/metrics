import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { schoolAtom, idelTimeAtom } from "../store";
import { useAtom } from "jotai";
import { useIdleTimer } from "react-idle-timer";

interface MyProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: MyProps) => {
  const [school] = useAtom(schoolAtom);
  // const [time, setTime] = useAtom(idelTimeAtom);
  // const onPrompt = () => {
  //   // Fire a Modal Prompt
  // };
  // const updateTicker = (time: number) => {
  //   setTime(Math.floor(time / 1000 / 60));
  // };
  // const onIdle = () => {
  //   // Close Modal Prompt
  //   // Do some idle action like log out your user
  // };
  // const onActive = (event: any) => {
  //   // Close Modal Prompt
  //   // Do some active action
  // };
  // const onAction = (event: any) => {
  //   const _remT = getRemainingTime();
  //   updateTicker(_remT);
  //   // Do something when a user triggers a watched event
  // };
  // const {
  //   // start,
  //   // reset,
  //   // activate,
  //   // pause,
  //   // resume,
  //   // isIdle,
  //   // isPrompted,
  //   // isLeader,
  //   // getTabId,
  //   getRemainingTime,
  //   // getElapsedTime,
  //   // getLastIdleTime,
  //   // getLastActiveTime,
  //   // getTotalIdleTime,
  //   // getTotalActiveTime,
  // } = useIdleTimer({
  //   onPrompt,
  //   onIdle,
  //   onActive,
  //   onAction,
  //   timeout: 1000 * 60 * 10,
  //   promptTimeout: 0,
  //   events: ["keydown", "mousedown", "mouseenter", "touchstart", "touchmove"],
  //   name: "idle-timer",
  //   syncTimers: 0,
  // });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`${school.shortname} | ${school.name}`}</title>
      </Head>
      {children}
      <Script src="/assets/js/base.js" strategy="lazyOnload" />
    </>
  );
};
export default AdminLayout;
