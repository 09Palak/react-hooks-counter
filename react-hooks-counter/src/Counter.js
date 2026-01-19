import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs when component is mounted
  useEffect(() => {
    console.log("Counter component mounted");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
