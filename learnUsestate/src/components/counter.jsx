import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Count : {count}</h1>
      <div className="btnContainer">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
