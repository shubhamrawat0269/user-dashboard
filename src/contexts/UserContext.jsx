import { createContext, useState } from "react";

const UserContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const UserContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const context = {
    activeMenu,
    setActiveMenu,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
