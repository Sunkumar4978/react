import React, { useEffect, useState } from "react";
import Items from "./useAddCartTaskItem";
import "./useAddCartTask.css";

const IntProducts = [
  {
    id: 1,
    isPresent: true,
    img: "https://rukminim1.flixcart.com/image/128/128/knt7zbk0/shoe/t/c/0/7-5g-845-campus-gry-d-gry-original-imag2eyntak2mury.jpeg?q=70",
    title: "campus-gry-d-gry-original-imag2eyntak2mury-Grey",
    price: 12000,
    count: 1,
  },
  {
    id: 2,
    isPresent: true,
    img: "https://rukminim1.flixcart.com/image/128/128/kzllrbk0/shoe/7/d/u/9-sm-718-9-sparx-navy-original-imagbhy7v6wxgjjh.jpeg?q=70",
    title: "campus-gry-d-gry-original-imag2eyntak2mury-Grey",
    price: 10000,
    count: 1,
  },
  {
    id: 3,
    isPresent: true,
    img: "https://rukminim1.flixcart.com/image/128/128/l4x2rgw0/shoe/z/x/v/8-9402-8-world-wear-footwear-black-original-imagfpk6spbfmfma.jpeg?q=70",
    title: "campus-gry-d-gry-original-imag2eyntak2mury-Grey",
    price: 1000,
    count: 1,
  },
  {
    id: 4,
    isPresent: true,
    img: "https://rukminim1.flixcart.com/image/128/128/knt7zbk0/shoe/t/c/0/7-5g-845-campus-gry-d-gry-original-imag2eyntak2mury.jpeg?q=70",
    title: "campus-gry-d-gry-original-imag2eyntak2mury-Grey",
    price: 10000,
    count: 1,
  },
  {
    id: 5,
    isPresent: true,
    img: "https://rukminim1.flixcart.com/image/128/128/kzllrbk0/shoe/7/d/u/9-sm-718-9-sparx-navy-original-imagbhy7v6wxgjjh.jpeg?q=70",
    title: "campus-gry-d-gry-original-imag2eyntak2mury-Grey",
    price: 10000,
    count: 1,
  },
];
const IntLayout = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(IntProducts);
  useEffect(() => {
    setTotal(
      products
        .filter((product) => product.isPresent)
        .map((product) => product.price * product.count)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }, [products]);
  const handleIncrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };
  const handleDecrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count > 1 ? product.count - 1 : product.count,
            }
          : product
      )
    );
  };
  const isShow = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, isPresent: false } : product
      )
    );
  };
  return (
    <main>
      <div className="header-flex">
        <h2>Checkout Goods</h2>
        <a href="link">View details</a>
      </div>
      <ul className="main-items">
        {products.map((product) => (
          <Items
            product={product}
            // key={product.id}
            increment={handleIncrement}
            decrement={handleDecrement}
            show={isShow}
          />
        ))}
      </ul>
      <div className="footer-total">
        <h2>Grand Total</h2>
        <span>
          <h2>{total}</h2>
        </span>
      </div>
    </main>
  );
};

export default IntLayout;