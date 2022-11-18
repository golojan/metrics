import Link from "next/link";
import React from "react";

function AppSummary() {
  return (
    <>
      <div className="mx-5 mb-10">
        <div className="section full mt-4">
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
        </div>

        <div className="section full">
          <div className="section-heading padding">
            <h3 className="title">
              Lecturers <span className="text-muted">(0)</span>
            </h3>
            <Link href="#" className="link">
              View All
            </Link>
          </div>
        </div>

        <div className="section full">
          <div className="section-heading padding">
            <h3 className="title">
              Students <span className="text-muted">(0)</span>
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
