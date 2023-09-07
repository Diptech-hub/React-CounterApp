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
      <p>Current Value</p>
      <h1>{count}</h1>
      <div className="icon">
      <ChevronUp onClick={incrementByOne}></ChevronUp>
      <ChevronsUp onClick={incrementByTen}></ChevronsUp>
      <RotateCcw onClick={reset}></RotateCcw>
      <Hash onClick={randomNum}></Hash>
      <ChevronsDown onClick={decrementByTen}></ChevronsDown>
      <ChevronDown onClick={decrementByOne}></ChevronDown>
      </div>
    </div>
  );
}

export default Head;
