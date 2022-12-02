import { faAreaChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import ChartComponent from "./ChartComponent";
import ShowChartButton from "./ShowChartButton";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const SchoolRanking = () => {
  const { analytics_students, statistics_students, sBusy } = useSelector(
    (state: RootState) => state.students
  );
  const { analytics_lecturers, statistics_lecturers, lBusy } = useSelector(
    (state: RootState) => state.lecturers
  );
  const { analytics_faculties, statistics_faculties, fBusy } = useSelector(
    (state: RootState) => state.faculties
  );
  const { analytics_departments, statistics_departments, dBusy } = useSelector(
    (state: RootState) => state.departments
  );

  useEffect(() => {});

  return (
    <>
      <div className="section mb-10">
        <div className="row mt-2">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box ">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Student-Teacher Ratio</strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  <span className="text-green-700 animate-pulse">
                    {analytics_students.STUDENT_TEACHER_RATIO}
                  </span>
                </h1>
                <ChartComponent
                  labels={["Stud", "Lects"]}
                  data={[statistics_students.count, statistics_lecturers.count]}
                  color={["#3265af", "#8494a8"]}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box ">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Female Students</strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  {analytics_students.PERCENTAGE_FEMALE}%
                </h1>
                <ChartComponent
                  labels={["M", "F"]}
                  data={[
                    statistics_students.countMale,
                    statistics_students.countFemale,
                  ]}
                  color={["#3265af", "#8494a8"]}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Full Professors</strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  {analytics_lecturers.PERCENTAGE_FULL_ACCREDITATION}%
                </h1>
                <ChartComponent
                  labels={["P.full", "P.normal"]}
                  data={[
                    statistics_lecturers.countFullPreffessors,
                    statistics_lecturers.countPreffessors,
                  ]}
                  color={["#3265af", "#8494a8"]}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">International Students</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {analytics_students.INTERNATIONAL_STUDENTS}%
              </h1>
              <ChartComponent
                labels={["Int.St", "Loc.St"]}
                data={[
                  statistics_students.countIntl,
                  statistics_students.count,
                ]}
                color={["#3265af", "#8494a8"]}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">International Lecturers</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {analytics_lecturers.INTERNATIONAL_LECTURERS}%
              </h1>
              <ChartComponent
                labels={["Int.St", "Loc.St"]}
                data={[
                  statistics_lecturers.countIntl,
                  statistics_lecturers.count,
                ]}
                color={["#3265af", "#8494a8"]}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Female Lecturers</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {analytics_lecturers.FEMALE_LECTURERS}%
              </h1>
              <ChartComponent
                labels={["Int.St", "Loc.St"]}
                data={[
                  statistics_lecturers.countFemale,
                  statistics_lecturers.count,
                ]}
                color={["#3265af", "#8494a8"]}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">% Full Accreditation</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {analytics_departments.FULL_ACCREDITATION}%
              </h1>
              <ChartComponent
                labels={["full.accr", "others"]}
                data={[
                  statistics_departments.countAccredited,
                  statistics_departments.countNonAccredited,
                ]}
                color={["#3265af", "#8494a8"]}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">Efficiency</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {99.9}
              </h1>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">Citations Per Capita</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {7.89}
              </h1>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">H-index Per Capita</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {346}
              </h1>
            </div>
          </div>

          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">i-10-index Per Capita</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {345}
              </h1>
            </div>
          </div>
          {/*  */}

          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Google Scholar Presence</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {20}%
              </h1>
              <ChartComponent
                labels={["GSP", "non.GSP"]}
                data={[20, 80]}
                color={["green", "#8494a8"]}
              />
            </div>
          </div>
          {/*  */}

          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box disabled">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">Knowledge Economy</strong>
              </div>
              <h1 className="total mt-2">
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faAreaChart}
                />{" "}
                {45}
              </h1>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default SchoolRanking;
