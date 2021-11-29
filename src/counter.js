import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plusHandler = () => {
    setCounter(counter + 1);
  };
  const minusHandler = () => {
    setCounter(counter - 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={minusHandler}>-</button>
      <button onClick={plusHandler}>+</button>
      <button onClick={resetHandler}>reset</button>
    </>
  );
};

export default Counter;
