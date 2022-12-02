import React from "react";
import PieChart from "../components/charts/PieChart";

function AppAnalytics() {
  return (
    <>
      <div className="section">
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black h4">FACULTIES</strong> - Analytics
                <div className="row mt-2">
                  <div className="col-md-8">wee</div>
                  <div className="col-md-4 text-left">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black h4">DEPARTMENTS</strong> -
                Analytics
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black h4">LECTURERS</strong> - Analytics
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">
                <strong className="text-black h4">STUDENTS</strong> - Analytics
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppAnalytics;
