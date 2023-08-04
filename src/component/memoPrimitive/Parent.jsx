import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(10);
  const handleIncrement = (number) => {
    setCount(number);
  };
  console.log("parent rendering");

  return (
    <div>
      <h1>Parent -{count}</h1>
      <button onClick={() => handleIncrement(40)}>Increment</button>
      <Child increment={10} />
    </div>
  );
};

export default Parent;
