import React, { useEffect } from "react";
import { useAtom } from "jotai";
import Router, { useRouter } from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { Token } from "../interfaces";
import { accidAtom, isLoggedInAtom, userAtom } from "../store";

// Login & Create session for a given minutes time
export const authLogin = ({ token }: Token) => {
  const expire_time: any = process.env.COOKIE_TIME_IN_MINS || 10;
  const inMinutes = new Date(new Date().getTime() + expire_time * 60 * 1000);
  cookie.set("token", token as string, { expires: inMinutes });
  Router.push("/dashboard");
};

export const auth = (ctx: any) => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (ctx.req && !token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return token;
};

export const hasAuth = (ctx: any) => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (ctx.req && !token) {
    if (typeof window === "undefined") {
      return false;
    } else {
      return false;
    }
  }
  return true;
};

export const authlogout = () => {
  cookie.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", `${Date.now()}`);
  Router.push("/?~out+");
};

const updateUser = async (_token: any) => {
  const response = await fetch(`/api/accounts/${_token}/info`);
  const userinfo = await response.json();
  return userinfo;
};

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [, setAccid] = useAtom(accidAtom);
    const [, setLoggedIn] = useAtom(isLoggedInAtom);
    const [, setUserInfo] = useAtom(userAtom);

    const syncLogout = (event: any) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/");
      }
    };
    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      const token = cookie.get("token");
      if (token) {
        updateUser(token)
          .then((info) => {
            setUserInfo(info);
          })
          .catch();
        setLoggedIn(true);
        setAccid(token);
      }
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, [setLoggedIn, setAccid, setUserInfo]);

    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx: any) => {
    const token = auth(ctx);
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, token };
  };
  return Wrapper;
};
