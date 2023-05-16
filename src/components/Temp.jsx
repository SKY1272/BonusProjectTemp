import React, { useState } from "react";
import style from "./Temp.module.css";
function Temp() {
  const [temp, setTemp] = useState(20);
  function Increment() {
    setTemp(temp + 1);
  }
  function Decrement() {
    setTemp(temp - 1);
  }
  function getChangeColor() {
    if (temp >= 20 && temp < 30) {
      return "yellow";
    } else if (temp >= 30 && temp < 50) {
      return "orange";
    } else {
      return "yellow";
    }
  }
  return (
    <div className={style.container}>
      <h1>Temp App</h1>
      <p style={{ backgroundColor: getChangeColor() }}>
        <span>{temp}°C</span>
      </p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement} strye={{ marginright: "10rem" }}>
        -
      </button>
    </div>
  );
}
export default Temp;
