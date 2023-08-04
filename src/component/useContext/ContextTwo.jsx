import React from "react";
import { useMyContext } from "./Context";

const ContextTwo = () => {
  const { name } = useMyContext();
  return <div>{name}</div>;
};

export default ContextTwo;
