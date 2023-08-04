import React from "react";

const Layout = ({ product }) => {
  return (
    <>
      {product.map((d) => (
        <div key={d.id}>
          <img
            src={`https://images.bewakoof.com/t640/${d.display_image}`}
            alt="img"
          />
          <h3>{d.name}</h3>
          <h3>${d.price}</h3>
        </div>
      ))}
    </>
  );
};

export default Layout;
