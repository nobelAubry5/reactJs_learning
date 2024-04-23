import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const decrement = () => {
    setCounter((c) => c - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Counter Project</h1>
      <div className="flex items-center justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 focus:outline-none"
        >
          -1
        </button>
        <span className="text-3xl font-bold">{counter}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md ml-2 focus:outline-none"
        >
          +1
        </button>
      </div>
      <button
        onClick={resetCounter}
        className="block w-full mt-4 px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
