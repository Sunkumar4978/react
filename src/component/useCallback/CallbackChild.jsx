import React from 'react'

const CallbackChild = ({increment}) => {
    console.log("child rendering");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => increment(40)}>Increment</button>
    </div>
  );
};

export default CallbackChild