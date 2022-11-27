import { faAreaChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChartComponent from "../components/ChartComponent";
import ShowChartButton from "../components/ShowChartButton";

const SchoolRanking = () => {
  return (
    <>
      <div className="section">
        <div className="row mt-2">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">Student-Teacher Ratio</strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  {0.8}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">Percentage Female</strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  {15.7}%
                </h1>
                <ChartComponent
                  labels={["M", "F"]}
                  data={[500, 140]}
                  color={["black", "green"]}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton show={false} />
              <div className="title">
                <strong className="text-black">
                  Percentage Full Professors
                </strong>
                <h1 className="total mt-2">
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faAreaChart}
                  />{" "}
                  {30}%
                </h1>
                <ChartComponent
                  labels={["P.full", "P.normal"]}
                  data={[5, 10]}
                  color={["blue", "black"]}
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
                {17.8}%
              </h1>
              <ChartComponent
                labels={["Int.St", "Loc.St"]}
                data={[5, 10]}
                color={["red", "black"]}
              />
            </div>
          </div>
        </div>

        <div className="row mt-2">
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
                {98}%
              </h1>
              <ChartComponent
                labels={["full.accr", "others"]}
                data={[98, 2]}
                color={["red", "black"]}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
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
            <div className="stat-box">
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
            <div className="stat-box">
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
        </div>

        <div className="row mt-2">
          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
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
            <div className="stat-box">
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
                color={["green", "black"]}
              />
            </div>
          </div>
          {/*  */}

          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
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

          {/*  */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
            <div className="stat-box">
              <ShowChartButton />
              <div className="title">
                <strong className="text-black">Total score</strong>
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
        </div>
      </div>
    </>
  );
};

export default SchoolRanking;
