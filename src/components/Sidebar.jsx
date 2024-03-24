import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../hooks/useStateContext";

const Sidebar = () => {
  const { user, activeMenu, screenSize, setActiveMenu } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  };

  return (
    <div
      className={`ml-3 md:overflow-hidden overflow-auto md:hover:Loverflow-auto ${
        activeMenu ? "pb-10 h-screen" : ""
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <div
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-500 cursor-pointer"
            >
              <AiFillCopyrightCircle /> <span>Canopi</span>
            </div>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-5 p-2 pb-0">
            <span className="text-l tracking-tight dark:text-white text-stone-400">
              Welcome,
            </span>
            <span className="text-l font-bold dark:text-white text-stone-400">
              {user?.email.slice(0, user.email.indexOf("@"))}
            </span>
          </div>
          {links.map((item) => {
            return (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => {
                  return (
                    <div
                      key={link.name}
                      onClick={handleCloseSidebar}
                      className="flex gap-2 items-center pl-5"
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Sidebar;
