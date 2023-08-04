import React from "react";
const CartItem = ({ product, increment, decrement, show }) => {
  return (
    <>
      {product.isPresent ? (
        <section style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked
              onChange={() => {
                show(product.id);
              }}
            />  
            <img src={product.img} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{product.title}</h2>
            <div style={{ border: "1px solid", height: "25px " }}>
              <button onClick={() => increment(product.id)}>+</button>
              <span>{product.count}</span>
              <button onClick={() => decrement(product.id)}>-</button>
            </div>
          </div>
          <div>
            <h2>{product.price * product.count}</h2>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default CartItem;