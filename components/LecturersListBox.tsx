import React from "react";
import ShowChartButton from "../components/ShowChartButton";
import Image from "next/image";

import { Virtuoso } from "react-virtuoso";

import ScholarRatingLarge from "./ScholarRatingLarge";
import ScholarRatingSmall from "./ScholarRatingSmall";
import { LecturerInfo } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getDepartment } from "../utils/queries";
import { Gender } from "../interfaces/enums";

type ScholarsProps = { lecturers: LecturerInfo[] };

const LecturersListBox = ({ lecturers }: ScholarsProps) => {
  const { departments } = useSelector((state: RootState) => state.departments);

  return (
    <>
      <Virtuoso
        data={lecturers}
        totalCount={lecturers.length}
        itemContent={(index, lecturer) => (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 row-auto text-left stat-box"
            key={index}
          >
            <Image
              src={`${lecturer.avatar}`}
              alt={`${lecturer.firstname}`}
              width={90}
              height={90}
              className="float-left mr-2 imaged"
            />
            <ShowChartButton show={false} />
            <div className="title my-0">
              <strong className="text-black">
                {
                  getDepartment(departments, lecturer.departmentId as string)
                    ?.name
                }
              </strong>
            </div>
            <h4 className="h3 my-1">
              <strong className="text-green-700">{lecturer.lastname}</strong>,{" "}
              {lecturer.firstname} {lecturer.middlename}
            </h4>
            <div className="text-md mt-0">
              <span>ID:</span>{" "}
              <span className="text-black">{lecturer.staffNumber}</span>
              <span className="text-gray-400"> | </span>
              <span>{lecturer.gender === Gender.MALE ? "Male" : "Female"}</span>
            </div>
            <ScholarRatingLarge lecturer={lecturer} />
            <ScholarRatingSmall lecturer={lecturer} />
          </div>
        )}
      />
    </>
  );
};

export default LecturersListBox;
