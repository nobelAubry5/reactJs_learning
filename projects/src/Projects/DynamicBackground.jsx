import { useState } from "react";

const DynamicBackgroundToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex justify-center items-center h-screen">
        <button
          className={`px-4 py-2 rounded-md ${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={toggleMode}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default DynamicBackgroundToggle;
