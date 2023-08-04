import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [details, setDetails] = useState(null);
  const Login = (user) => {
    setDetails(user);
  };
  const Logout = () => {
    setDetails(null);
  };
  return (
    <UserContext.Provider value={{ Login, details,Logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserCustom = () => useContext(UserContext);
