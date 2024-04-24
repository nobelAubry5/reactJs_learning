import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">
        Toggle state Project
      </h1>
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          id="toggle-switch"
          checked={isOn}
          onChange={toggleSwitch}
          className="hidden"
        />
        <label
          htmlFor="toggle-switch"
          className={`cursor-pointer relative w-14 h-8 rounded-full ${
            isOn ? "bg-green-300" : "bg-red-100"
          }`}
        >
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
              isOn ? "transform translate-x-full" : ""
            }`}
          ></div>
        </label>
        <p className="ml-2">{isOn ? "ON" : "OFF"}</p>
      </div>
    </>
  );
};

export default ToggleSwitch;
