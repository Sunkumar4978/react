import React, { useState } from "react";

const Button = () => {
  const [IsOn, setIsOn] = useState(false);

  const handleFucntion = () => {
    setIsOn(!IsOn);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: IsOn ? "green" : "blue" }}
        onClick={handleFucntion}
      >
        {IsOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Button;
