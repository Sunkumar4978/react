import React, { createContext, useContext, useState } from "react";
import { data } from "../../source";

const newFlipkart = createContext();

const AgainContext = ({ children }) => {
  const [datas, setDatas] = useState(data);
  return (
    <newFlipkart.Provider value={{ datas, setDatas }}>
      {children}
    </newFlipkart.Provider>
  );
};

export default AgainContext;

export const useCustomFlifkart = () => useContext(newFlipkart);
