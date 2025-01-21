
import "./App.css";
import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">Simple Counter App</header>
      <div className="counter-box">
        <button className="counter-button" onClick={decrementCounter}>
          -
        </button>
        <h2 className="counter-value">{counter}</h2>
        <button className="counter-button" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
