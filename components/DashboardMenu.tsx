import React from "react";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gender, StudentType } from "../interfaces/enums";

import { Dispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Busy from "./Busy";
import { FakerLecturer, FakerStudent } from "../interfaces";

const DashboardMenu = () => {
  const sBusy = useSelector((state: RootState) => state.students.sBusy);
  const lBusy = useSelector((state: RootState) => state.lecturers.lBusy);

  const dispatch = useDispatch<Dispatch>();
  const addStudent = async ({ sex, type, challanged }: FakerStudent) => {
    await dispatch.students.addFakeStudent({
      sex: sex,
      type: type,
      challanged: challanged,
    });
  };

  const addLecturer = async ({
    sex,
    type,
    isprofessor,
    isfullprofessor,
  }: FakerLecturer) => {
    await dispatch.lecturers.addFakeLecturer({
      sex: sex,
      type: type,
      isprofessor: isprofessor,
      isfullprofessor: isfullprofessor,
    });
  };
  return (
    <>
      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          {sBusy ? <Busy /> : null}
          <div className="title">
            <strong className="text-black">STUDENTS</strong> (Male & Female)
          </div>
          <hr />
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.MALE,
                type: StudentType.LOCAL,
                challanged: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Student (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.FEMALE,
                type: StudentType.LOCAL,
                challanged: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Student (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.MALE,
                type: StudentType.INTERNATIONAL,
                challanged: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Student (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.FEMALE,
                type: StudentType.INTERNATIONAL,
                challanged: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Student
              (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.MALE,
                type: StudentType.INTERNATIONAL,
                challanged: true,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Physically Challanged
              Student (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addStudent({
                sex: Gender.FEMALE,
                type: StudentType.LOCAL,
                challanged: true,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Physically Challanged
              Student (Female)
            </div>
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-4 col-sm-12 col-lg-4 mb-2">
        <div className="stat-box">
          {lBusy ? <Busy /> : null}
          <div className="title">
            <strong className="text-black">LECTURERS</strong> (Male & Female)
          </div>
          <hr />
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.LOCAL,
                isprofessor: false,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Lecturer (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.LOCAL,
                isprofessor: false,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Lecturer (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: false,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Lecturer
              (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: false,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Lecturer
              (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.LOCAL,
                isprofessor: true,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Professor (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.LOCAL,
                isprofessor: true,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Local Professor (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: true,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Professor
              (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: true,
                isfullprofessor: false,
              })
            }
          >
            <div className="text-blue-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New International Professor
              (Female)
            </div>
          </Link>
          <hr className="my-1" />
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.LOCAL,
                isprofessor: true,
                isfullprofessor: true,
              })
            }
          >
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Full Local Professor (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.LOCAL,
                isprofessor: true,
                isfullprofessor: true,
              })
            }
          >
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Full Local Professor
              (Female)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.MALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: true,
                isfullprofessor: true,
              })
            }
          >
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Full International Professor
              (Male)
            </div>
          </Link>
          <Link
            href="#"
            onClick={() =>
              addLecturer({
                sex: Gender.FEMALE,
                type: StudentType.INTERNATIONAL,
                isprofessor: true,
                isfullprofessor: true,
              })
            }
          >
            <div className="text-red-700 w-full">
              <FontAwesomeIcon icon={faPlus} /> New Full International Professor
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
