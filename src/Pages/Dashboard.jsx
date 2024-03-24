import React from "react";
import { GoDotFill } from "react-icons/go";
import { earningData, SparklineAreaData } from "../data/dummy";
import {
  Button,
  SparkLine,
  Stacked,
  CircularMeter,
  Calendars,
} from "../components/$composer";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div>
          <CircularMeter width="280px" height="280px" />
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => {
            return (
              <div
                key={item.title}
                className="bg-emerald-800 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconfig,
                  }}
                  className="text-3xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-7xl font-semibold text-amber-500">
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap e-justify-between items-center gap-12 ml-10">
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">
                Attendance & Salary This Month
              </p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoDotFill />
                  </span>
                  <span>Working Time</span>
                </p>
                <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                  <span>
                    <GoDotFill />
                  </span>
                  <span>Idle Time</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">₹ 43,750</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      10%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Bonus Added</p>
                </div>

                <div className="mt-5 border-l-2 border-b-2 border-b-gray-950 border-l-gray-950">
                  {/* Adding Sparkline Graph  */}
                  <SparkLine
                    id="line-sparkline"
                    height="80px"
                    width="300px"
                    currentColor="blue"
                    type="Line"
                    data={SparklineAreaData}
                    color="blue"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <Button
                    color={"white"}
                    bgColor={"blue"}
                    text="Sign In"
                    borderRadius="10px"
                  />
                  <Button
                    color={"white"}
                    bgColor={"blue"}
                    text="Payslip"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked width="260px" height="260px" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Calendars width="350px" height="340px" />
          <Button
            color={"white"}
            bgColor={"blue"}
            text="Apply Leave"
            borderRadius="2px"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
