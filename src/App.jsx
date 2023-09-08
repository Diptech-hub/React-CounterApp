import { useState } from "react";
import {
  ChevronUp,
  ChevronsUp,
  RotateCcw,
  Hash,
  ChevronsDown,
  ChevronDown,
} from "react-feather";

function Head() {
  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount(count + 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const reset = () => {
    setCount(count * 0);
  };

  const randomNum = () => {
    let count = Math.random() * 100;
    setCount(Math.trunc(count));
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  const decrementByOne = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <p>Current Value:</p>
      <h1>{count}</h1>
      <div className="icon">
      <button onClick={incrementByOne}><ChevronUp style={{backgroundColor: "#fff"}}></ChevronUp></button>
      <button onClick={incrementByTen}><ChevronsUp style={{backgroundColor: "#fff"}}></ChevronsUp></button>
      <button onClick={reset}><RotateCcw style={{backgroundColor: "#fff"}}></RotateCcw></button>
      <button onClick={randomNum}><Hash style={{backgroundColor: "#fff"}}></Hash></button>
      <button onClick={decrementByTen}><ChevronsDown style={{backgroundColor: "#fff"}}></ChevronsDown></button>
      <button onClick={decrementByOne}><ChevronDown style={{backgroundColor: "#fff"}}></ChevronDown></button>
      </div>
    </div>
  );
}

export default Head;
