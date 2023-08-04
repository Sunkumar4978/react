import React, { memo } from "react";

const Child = (increment) => {
  console.log("child rendering");
  return (
    <div>
      <h1>Child -{increment}</h1>
    </div>
  );
};
export default memo(Child);
