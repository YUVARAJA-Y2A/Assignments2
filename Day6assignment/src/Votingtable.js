import { useState } from "react";
import "./votingtable.css";

function Votingtable(props) {
  const [count, setCount] = useState(0);

  const increamentButton = () => {
    setCount(count + 1);
  };

  return (
    <div class="main">
      <span class="span-language">{props.language}</span>
      <span class="span-count">{count}</span>
      <span class="span-button">
        <button class="button" onClick={increamentButton}>
          Vote
        </button>
      </span>
    </div>
  );
}
export default Votingtable;
