import React from "react";
import type { AppProps } from "next/app";
import { Provider, useAtom } from "jotai";
import { useEffect } from "react";
import { domainAtom } from "../store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../public/DataTables/datatables.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [domain, setDomain] = useAtom(domainAtom);

  useEffect(() => {
    const hostname = window.location.hostname;
    alert(hostname);
    require("jquery/dist/jquery");
    require("popper.js/dist/popper");
    require("bootstrap/dist/js/bootstrap.bundle");
    require("../public/DataTables/datatables.min.js");
    require("../public/assets/js/base.js");
  }, []);

  return (
    <Provider>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
}

export default MyApp;
