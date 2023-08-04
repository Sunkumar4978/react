import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();
const Context = ({ children }) => {
  const [person, setPerson] = useState({ name: "", email: "", password: "" });

  const HandleChange = (e) => {
    setPerson({ ...person, [e.target.name]: [e.target.value] });
  };

  return (
    <MyContext.Provider value={{ person, setPerson, HandleChange }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;

export const useCustomContext = () => useContext(MyContext);
