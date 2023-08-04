import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("manfree");
  return <MyContext.Provider value={{ name }}>{children}</MyContext.Provider>;
};

export default Context;

export const useMyContext = () => useContext(MyContext);
   