import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../hooks/useStateContext";
import { Cart, Chat, Notification, UserProfile } from "./$composer";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  // const navigate = useNavigate();
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    user,
    logoutUser,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, [user]);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((preActiveState) => !preActiveState)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => setActiveMenu(() => handleClick("cart"))}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => setActiveMenu(() => handleClick("chat"))}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => setActiveMenu(() => handleClick("notifications"))}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <div className="rounded-full w-8 h-8 bg-blue-500 flex items-center justify-center text-white">
              {user?.displayName[0]}
            </div>
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                {user?.displayName}
              </span>
            </p>
          </div>
        </TooltipComponent>

        <NavButton
          title="Logout"
          customFunc={logoutUser}
          color="blue"
          icon={<AiOutlineLogout />}
        />

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
