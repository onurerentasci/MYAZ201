import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
    if (number >= 10) {
      setNumber(0);
    }
  };
  const handleDecrease = () => {
    setNumber(number - 1);
    if (number <= 0) {
      setNumber(0);
    }
  };

  return (
    <div>
      {number}
      <p>
        <button onClick={handleIncrease}>Increase +</button>
        <button onClick={handleDecrease}>Decrease -</button>
      </p>
    </div>
  );
}
