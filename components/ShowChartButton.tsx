import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const ShowChartButton = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontWeight: "bolder",
        }}
      >
        <Link href="#" legacyBehavior>
          <a className="button text-primary">
            <FontAwesomeIcon icon={faChartPie} fontSize={25} />
          </a>
        </Link>
      </div>
    </>
  );
};

export default ShowChartButton;
