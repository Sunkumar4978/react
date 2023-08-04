import React, { createContext, useContext, useState } from "react";

export const newContext = createContext();

const Practice = ({ children }) => {
  const [age, setAge] = useState(10);
  const HandleAge = () => {
    setAge(age + 10);
  };
  return (
    <newContext.Provider value={{ age, HandleAge }}>
      {children}
    </newContext.Provider>
  );
};

export default Practice;

export const useCustomContext = () => useContext(newContext);
