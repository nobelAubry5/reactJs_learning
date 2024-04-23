import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        Calculator Project
      </h1>
      <div className="display bg-gray-200 text-right font-mono text-4xl p-4 rounded-lg mb-4">
        {input || result || "0"}
      </div>
      <div className="buttons grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "0",
          ".",
          "/",
          "C",
          "=",
        ].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className={`${
              value === "C" || value === "=" ? "col-span-2" : "col-span-1"
            } bg-blue-500 text-white rounded-lg py-2 ${
              value === "=" ? "bg-green-500" : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
