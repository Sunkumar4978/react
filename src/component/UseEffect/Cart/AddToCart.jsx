import React, { useEffect, useState } from "react";
import "./AddToCart.css";
const initial = [
  {
    id: 1,
    isPresent: true,
    price: 100,
    title: "puma",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/z/r/6-395712-6-puma-iron-gate-black-original-imagp7nnep6d64dh.jpeg?q=70",
  },
  {
    id: 2,
    isPresent: true,
    price: 200,
    title: "adidas",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/l/t/8-grand-8-go-ride-white-original-imagqq4fs4bebaqd.jpeg?q=70",
  },
  {
    id: 3,
    isPresent: false,
    price: 300,
    title: "nike",
    count: 1,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/p/q/-original-imagpgpegvbyjg9h.jpeg?q=70",
  },
];

const AddToCart = () => {
  const [items, setItems] = useState(initial);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      items
        .filter((data) => data.isPresent)
        .map((d) => d.count * d.price)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }, [items]);
  const HandleDecrement = (id) => {
    setItems(
      items.map((data) =>
        data.id === id ? { ...data, count: data.count - 1 } : data
      )
    );
  };
  const HandleIncrement = (id) => {
    setItems(
      items.map((data) =>
        data.id === id ? { ...data, count: data.count + 1 } : data
      )
    );
  };
  return (
    <div className="main-component">
      <div className="component">
        <h1>Checkout Goods</h1>
        <ul className="parent">
          {items.map(
            (item) =>
              item.isPresent && (
                <li key={item.id} style={{ listStyle: "none" }} className="child">
                  <input
                    type="checkbox"
                    defaultChecked
                    onClick={() =>
                      setItems(
                        items.map((d) =>
                          d.id === item.id ? { ...d, isPresent: false } : d
                        )
                      )
                    }
                  />
                  <img
                    src={item.img}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  {item.title}
                  <button
                    onClick={() => HandleDecrement(item.id)}
                    disabled={item.count < 1 ? true : ""}
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
        <h1>Grand total - {total}</h1>
      </div>
    </div>
  );
};

export default AddToCart;
