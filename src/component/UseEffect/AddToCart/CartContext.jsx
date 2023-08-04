import React, { createContext, useContext, useState } from "react";
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

export const MyCardContext = createContext();

const AddCartContext = ({ children }) => {
  const [items, setItems] = useState(initial);
  const [total, setTotal] = useState(0);
  return (
    <MyCardContext.Provider value={{ items, setItems, total, setTotal }}>
      {children}
    </MyCardContext.Provider>
  );
};

export default AddCartContext;

export const useAddCartCustom = () => useContext(MyCardContext);
