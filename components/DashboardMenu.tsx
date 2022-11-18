import React from "react";
import Link from "next/link";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardMenu = () => {
  return (
    <>
      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          <div className="title">
            <strong className="text-black">INTAKES</strong> (Intakes & Prime
            Intakes)
          </div>
          <hr />
          <Link href="/dashboard/intakes/add">
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Intake
            </div>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          <div className="title">
            <strong className="text-black">INFLOWS</strong> (Add Revenue to
            Record)
          </div>
          <hr />

          <Link href="#">
            <div className="text-green-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> Add Salary Post-Deposit fee
            </div>
          </Link>
          <Link href="#">
            <div className="text-green-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> Add Salary Pre-Deposit fee
            </div>
          </Link>
          <Link href="#">
            <div className="text-green-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> Other Fees fee
            </div>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          <div className="title">
            <strong className="text-black">OUTFLOWS</strong> (Add Expenditures
            to Record)
          </div>
          <hr />
          <Link href="#">
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faMinus} /> Retire Daily Logistics
            </div>
          </Link>
          <Link href="#">
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faMinus} /> Other Expenses
            </div>
          </Link>
        </div>{" "}
      </div>
    </>
  );
};
export default DashboardMenu;
