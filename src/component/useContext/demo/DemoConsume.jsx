import React from "react";
import { useCustomContext } from "./DemoContext";


const ChildA = () => {
  return (
    <div>
      <h1>ChildA</h1>
      <ChildB />
      <ChildC/>
    </div>
  );
};

export default ChildA;

export const ChildB = () => {
  const { HandleAge, age } = useCustomContext();
  return (
    <div>
      <h1>Age-{age}</h1>
      <button onClick={() => HandleAge()}>click</button>
      <h1>ChildB</h1>
    </div>
  );
};

export const ChildC = () => {
  return (
    <div>
      <h1>ChildC</h1>
    </div>
  );
};
