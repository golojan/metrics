import React from "react";
import Link from "next/link";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gender, StudentType } from "../interfaces/enums";

const DashboardMenu = () => {
  const addStudent = async (sex: any, type: any) => {
    const response = await fetch(`/api/fakes/student?sex=${sex}&type=${type}`);
    const { status, accid } = await response.json();
  };
  return (
    <>
      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          <div className="title">
            <strong className="text-black">STUDENTS</strong> (Male & Female)
          </div>
          <hr />
          <Link
            href="#"
            onClick={() => addStudent(Gender.MALE, StudentType.LOCAL)}
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Student (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() => addStudent(Gender.FEMALE, StudentType.LOCAL)}
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Student (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() => addStudent(Gender.FEMALE, StudentType.INTERNATIONAL)}
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Student (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() => addStudent(Gender.FEMALE, StudentType.INTERNATIONAL)}
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Student
              (Female)
            </div>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2"></div>

      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2"></div>
    </>
  );
};
export default DashboardMenu;
