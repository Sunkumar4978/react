import React, { createContext, useContext, useState } from "react";
import { data } from "../../source";

const NewContext = createContext();
const Context = ({ children }) => {
  const [datas, setDatas] = useState(data);
  return (
    <NewContext.Provider value={{ datas, setDatas }}>
      {children}
    </NewContext.Provider>
  );
};

export default Context;

export const useCustom = () => useContext(NewContext);
