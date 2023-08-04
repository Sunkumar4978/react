import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const Parent = () => {

  const [count, setCount] = useState(10);
  const handleIncrement = useCallback((number) => {
    setCount(number);
  }, []);
  console.log("parent rendering");
  return (
    <div>
      <h1>Parent -{count}</h1>
      <CallbackChild increment={handleIncrement} />
    </div>
  );
};
export default Parent;
