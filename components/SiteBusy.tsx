import React from "react";
import { useAtom } from "jotai";
import { busyAtom } from "../store";
import BarLoader from "react-spinners/BarLoader";

function SiteBusy() {
  const [busy] = useAtom(busyAtom);
  return (
    <>
      {busy && (
        <BarLoader
          color="#66789c"
          loading={busy}
          width="100%"
          height={5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}

export default SiteBusy;
