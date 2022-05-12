import "./count.css";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const increamentButton = () => {
    setCount(count + 1);
  };
  const decreamentButton = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>count : {count}</h2>
      <button className="increament-button" onClick={increamentButton}>
        Increament
      </button>
      <button className="decreament-button" onClick={decreamentButton}>
        Decreament
      </button>
    </div>
  );
}
export default Count;
