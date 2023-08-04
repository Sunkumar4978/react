import React, { useMemo, useState } from "react";
import Child from "./Child";

const MemoParent = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(10);

  console.log("parent rendering");

  const person = useMemo(
    () => ({
      name: "ragnar",
      course: "python",
    }),
    [age]
  );

  return (
    <div>
      <h1>Parent -{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Child person={person} />
      <h1>age - {age}</h1>
      <button onClick={() => setAge((age) => age + 10)}>age</button>
    </div>
  );
};

export default MemoParent;
