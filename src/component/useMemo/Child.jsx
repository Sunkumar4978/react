import React, { memo } from "react";
const Child = ({ increment }) => {
  console.log("child rendering");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => increment(40)}>Increment</button>
    </div>
  );
};
export default memo(Child);