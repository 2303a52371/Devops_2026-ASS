import React, { useState } from "react";

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement (prevent below zero)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      {/* Bonus message */}
      {count === 10 && <p style={{ color: "blue" }}>🎉 You reached 10!</p>}

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
