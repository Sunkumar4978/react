import React, { useEffect } from "react";
import { useAddCartCustom } from "./CartContext";

const MainLayout = () => {
  const { items, setItems, total, setTotal } = useAddCartCustom();

  useEffect(() => {
    setTotal(
      items
        .filter((data) => data.isPresent)
        .map((data) => data.price * data.count)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }, [items]);

  const HandleIncrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const HandleDecrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  return (
    <div>
      <h1>Checkout Goods</h1>
      <ul>
        {items.map(
          (item) =>
            item.isPresent && (
              <li key={item.id}>
                <input type="checkbox" />
                <img src={item.img} alt="" />
                {item.title}
                <button
                  disabled={item.count < 1 ? true : false}
                  onClick={() => HandleDecrement(item.id)}
                >
                  -
                </button>
                {item.count}
                <button onClick={() => HandleIncrement(item.id)}>+</button>
                {item.price * item.count}
              </li>
            )
        )}
      </ul>
      <h1>Grand Total - {total}</h1>
    </div>
  );
};

export default MainLayout;
