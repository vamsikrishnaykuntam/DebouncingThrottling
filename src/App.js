import "./styles.css";
import { myDebounce, myThrottle } from "./utils";
import React, { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [triggered, setTrigger] = useState(0);
  const [throttleCount, setthrottleCount] = useState(0);
  const [throttleTrigger, setthrottleTrigger] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    myDebounced();
  };
  const myDebounced = useCallback(
    myDebounce(() => {
      setTrigger((prevTriggered) => prevTriggered + 1);
    }, 500),
    []
  );
  const handleThrottleClick = () => {
    setthrottleCount((prevthrottleCount) => prevthrottleCount + 1);
    myThrottled();
  };
  const myThrottled = useCallback(
    myThrottle(() => {
      setthrottleTrigger((prevThrottleCount) => prevThrottleCount + 1);
    }, 500),
    []
  );
  return (
    <div className="App">
      <h2> Debounce </h2>
      <button onClick={handleClick}>Increment</button>
      <p>Button Pressed {count}times</p>
      <p>Triggered {triggered}times</p>
      <hr />
      <h2> Throttling </h2>
      <button onClick={handleThrottleClick}> Increment </button>
      <p> Button pressed {throttleCount} times </p>
      <p> Triggered {throttleTrigger} times </p>
    </div>
  );
}
