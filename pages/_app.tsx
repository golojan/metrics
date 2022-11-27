import React, { useEffect } from "react";
import App from "next/app";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../public/DataTables/datatables.min.css";
import "../styles/globals.scss";
import { withUniversity } from "../utils/withInitialProps";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("jquery/dist/jquery");
    require("popper.js/dist/popper");
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <Provider>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withUniversity(MyApp);
