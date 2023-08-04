import React, { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  console.log(userList);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  const Login = (user) => {
    setUserDetails(user);
  };
  const Logout = () => {
    setUserDetails(null);
  };

  return (
    <userContext.Provider value={{ Login, Logout, userDetails }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

export const useUserCustom = () => useContext(userContext);
