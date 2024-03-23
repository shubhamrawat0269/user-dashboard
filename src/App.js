import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // For ref only, in future will create Context API
  const activeSidebar = false;

  return (
    <div>
      <BrowserRouter>
        {/* setting icon below  */}
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "999" }}>
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
        {activeSidebar ? (
          <div className="w-72 fixed sidebar dar:bg-secondary-dark-bg bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark-bg-secondary-dark-bg">Sidebar</div>
        )}

        {/* navigation bar */}
        <div
          className={
            activeSidebar
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full"
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2"
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>

        {/* Routes here  */}

        <div>
          <Routes>
            {/* In future, add Sign In SignUp Routes too  */}

            {/* Dashboard  */}
            <Route path="/" element="User Dashboard" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
