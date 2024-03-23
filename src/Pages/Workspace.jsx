import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar } from "../components/$composer";
import { Dashboard } from "../Pages/$composer";
import { useStateContext } from "../hooks/useStateContext";

const Workspace = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      {/* setting icon below  */}
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "orange", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </div>
      {/* siderbar code */}
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}

      {/* navigation bar */}

      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72"
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>

        {/* Routes here  */}

        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
