import Link from "next/link";
import React from "react";

import { Dispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

function AppSummary() {
  const { studentsCount } = useSelector((state: RootState) => state.students);
  const { lecturersCount } = useSelector((state: RootState) => state.lecturers);

  const dispatch = useDispatch<Dispatch>();

  return (
    <>
      <div className="mx-5 mb-10  mt-4">
        {/* <div className="section full mt-4">
          <div className="section-heading padding">
            <h3 className="title">
              Faculties <span className="text-muted">(0)</span>
            </h3>
            <Link href="#" className="link">
              View All
            </Link>
          </div>
        </div>

        <div className="section full">
          <div className="section-heading padding">
            <h3 className="title">
              Departments <span className="text-muted">(0)</span>
            </h3>
            <Link href="#" className="link">
              View All
            </Link>
          </div>
        </div> */}

        <div className="section full">
          <div className="section-heading padding">
            <h3 className="title">
              Lecturers <span className="text-muted">({lecturersCount})</span>
            </h3>
            <Link href="#" className="link">
              View All
            </Link>
          </div>
        </div>

        <div className="section full">
          <div className="section-heading padding">
            <h3 className="title">
              Students <span className="text-muted">({studentsCount})</span>
            </h3>
            <Link href="#" className="link">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppSummary;
