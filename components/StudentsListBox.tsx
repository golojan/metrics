import React from "react";
import ShowChartButton from "./ShowChartButton";
import Image from "next/image";

import { Virtuoso } from "react-virtuoso";

import { StudentInfo } from "../interfaces";

type SchoolProps = { students: StudentInfo[] };

import { Dispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import StudentRatingLarge from "./StudentRatingLarge";
import StudentRatingSmall from "./StudentRatingSmall";
import { getDepartment } from "../utils/queries";
import { Gender } from "../interfaces/enums";
import Link from "next/link";

const StudentsListBox = ({ students }: SchoolProps) => {
  const dispatch = useDispatch<Dispatch>();
  const { departments } = useSelector((state: RootState) => state.departments);

  return (
    <>
      <Virtuoso
        data={students}
        totalCount={students.length}
        itemContent={(index, student) => (
          <div
            id={`${student._id}`}
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 row-auto text-left stat-box accordion-header"
            key={index}
          >
            <Image
              src={`${student.avatar}`}
              alt={`${student.firstname}`}
              width={90}
              height={90}
              className="float-left mr-2 imaged"
            />
            <ShowChartButton show={false} />
            <div className="title my-0">
              <strong className="text-black">
                {
                  getDepartment(departments, student.departmentId as string)
                    ?.name
                }
              </strong>
              <span className="hidden">
                <span className="text-gray-400"> | </span>
                <span>200 Level</span>
              </span>
            </div>
            <h4 className="h3 my-1">
              <strong className="text-green-700">{student.lastname}</strong>,{" "}
              {student.firstname} {student.middlename}
            </h4>
            <div className="text-md mt-0">
              <span>REG:</span>{" "}
              <span className="text-black">{student.regNumber}</span>
              <span className="text-gray-400"> | </span>
              <span>{student.gender === Gender.MALE ? "Male" : "Female"}</span>
            </div>
            <StudentRatingLarge student={student} />
            <StudentRatingSmall student={student} />
          </div>
        )}
      />
    </>
  );
};

export default StudentsListBox;
