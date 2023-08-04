import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";

const initial = [
  { id: uuid(), unit: 1, area: 50, price: 900, place: "covai" },
  { id: uuid(), unit: 1, area: 30, price: 1500, place: "tirupur" },
  { id: uuid(), unit: 1, area: 100, price: 700, place: "salem" },
  { id: uuid(), unit: 1, area: 150, price: 500, place: "erode" },
];

export const MyAreaContext = createContext();

const AreaContext = ({ children }) => {
  const [datas, setDatas] = useState(initial);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(subTotal);
  const [totalArea, setTotalArea] = useState(0);
  return (
    <MyAreaContext.Provider
      value={{
        datas,
        setDatas,
        subTotal,
        setSubTotal,
        total,
        setTotal,
        totalArea,
        setTotalArea,
      }}
    >
      {children}
    </MyAreaContext.Provider>
  );
};

export default AreaContext;
export const useAreaCustom = () => useContext(MyAreaContext);
