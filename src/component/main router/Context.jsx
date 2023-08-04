import React, { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext(null);
const Context = ({ children }) => {
  const [userDetails, setUserDEtails] = useState(null);

  useEffect(() => {
    console.log({ userDetails });
  }, [userDetails]);
  const Login = (user) => {
    setUserDEtails(user);
  };
  const Logout = () => {
    setUserDEtails(null);
  };

  return (
    <userContext.Provider value={{ Login, Logout, userDetails }}>
      {children}
    </userContext.Provider>
  );
};

export default Context;

export const useUserContext = () => useContext(userContext);
