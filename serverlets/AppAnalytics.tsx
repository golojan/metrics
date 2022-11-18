import React from "react";

function AppAnalytics() {
  return (
    <>
      <div className="section">
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black">FACULTIES</strong> - Analytics
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black">DEPARTMENTS</strong> - Analytics
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black">LECTURERS</strong> - Analytics
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black">STUDENTS</strong> - Analytics
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppAnalytics;
