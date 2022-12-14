import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "../public/DataTables/datatables.min.css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    require("jquery/dist/jquery");
    require("popper.js/dist/popper");
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
