import React, { useEffect } from "react";
import { useAreaCustom } from "./AreaContext";

const AreaLayout = () => {
  const {
    datas,
    setDatas,
    subTotal,
    setSubTotal,
    total,
    setTotal,
    totalArea,
    setTotalArea,
  } = useAreaCustom();

  const HandleDecrement = (id) => {
    setDatas(datas.map((d) => (d.id === id ? { ...d, unit: d.unit - 1 } : d)));
  };
  const HandleIncrement = (id) => {
    setDatas(datas.map((d) => (d.id === id ? { ...d, unit: d.unit + 1 } : d)));
  };

  useEffect(() => {
    setSubTotal(
      datas
        .map((data) => data.unit * data.price)
        .reduce((acc, cur) => acc + cur, 0)
    );
    setTotalArea(
      datas
        .map((data) => data.unit * data.price * data.area)
        .reduce((acc, cur) => acc + cur, 0)
    );
    setTotal(
      datas
        .map((data) => data.unit * data.price)
        .reduce((acc, cur) => acc + cur, 0) * 435
    );
  }, [datas]);


  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            {data.place}
            <button
              disabled={data.unit < 1 ? true : false}
              onClick={() => HandleDecrement(data.id)}
            >
              -
            </button>
            {data.unit}
            <button onClick={() => HandleIncrement(data.id)}>+</button>
            {data.price * data.unit}
            <h1>Total Area {data.area}</h1>
          </li>
        ))}
      </ul>
      <h1>subTotal - {subTotal}</h1>
      <h1>Area - {totalArea}</h1>
      <h1>Grand total - {total}</h1>
    </div>
  );
};

export default AreaLayout;
