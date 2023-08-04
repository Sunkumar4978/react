import React from "react";

const AgainMain = ({ products }) => {
  return (
    <>
      {products.map((data) => (
        <div className="item" key={data.id}>
          <img className="img"
            src={`https://images.bewakoof.com/t640/${data.display_image}`}
            alt="img"
          />
          <h3>{data.name}</h3>
          <h3>${data.price}</h3>
        </div>
      ))}
    </>
  );
};

export default AgainMain;
