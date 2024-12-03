import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setStep((prev) => prev + 1);
  }

  function handleDecrement() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  function handleCountIncrement() {
    setCount((cur) => cur + step);
  }

  function handleCountDecrement() {
    setCount((cur) => cur - step);
  }

  // Adding count to date
  let date = new Date();
  const currentDate = date.getDate();
  date.setDate(currentDate + count);

  // console.log("I re-render");

  function reset() {
    setCount(0);
    setStep(1);
    date = new Date();
  }

  return (
    <>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>Steps: {step}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrement}>+</button>
      </div>

      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>

      <div>
        <button onClick={reset}>Restart</button>
      </div>
    </>
  );
}

export default App;
