import React from "react";
import { useUserCustom } from "./UserContextProvider";
import { Navigate } from "react-router-dom";

const Products = () => {
  const { details } = useUserCustom();
  if (details) {
    const { username, password } = details;
    if (
      (username === "sun" && password === "123") ||
      (username === "arun" && password === "run") ||
      (username === "abi" && password === "hi")
    ) {
      return (
        <div>
          <h1>Products page</h1>
          <h3>name -{details.username}</h3>
        </div>
      );
    } else {
      return <Navigate to={"/home"} />;
    }
  } else {
    return <Navigate to={"/home"} />;
  }
};

export default Products;
