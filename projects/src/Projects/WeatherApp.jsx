import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const api = {
  key: "9b70e8e422ad338550b65ba391a6068a",
  base: "https://api.openweathermap.org/data/2.5/",
};

const bigCities = [
  "Québec",
  "Montreal",
  "Toronto",
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Los Angeles",
  "Beijing",
];

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

  const searchPressed = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      setWeatherData([result]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const promises = bigCities.map((city) =>
          fetch(
            `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`
          ).then((res) => res.json())
        );
        const responses = await Promise.all(promises);
        setWeatherData(responses);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  const renderWeatherCard = (data, index) => {
    const temperature = Math.round(data.main.temp);
    const weatherClass =
      temperature >= 15
        ? "bg-yellow-300 bg-opacity-25"
        : "bg-blue-300 bg-opacity-25";
    const toggleText = isDarkMode ? `text-white` : `text-black`;
    return (
      <div key={index} className={`p-4 rounded-md ${weatherClass}`}>
        <p className={`text-lg font-semibold ${toggleText}`}>{data.name}</p>
        <p className={`text-4xl font-bold ${toggleText}`}>{temperature}°C</p>
        <p className={`text-lg ${toggleText}`}>{data.weather[0].main}</p>
        <p className={`text-sm text-gray-600 ${toggleText}`}>
          {data.weather[0].description}
        </p>
      </div>
    );
  };

  return (
    <div
      className={`mx-auto p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {" "}
      {/* Dynamically apply dark/light mode */}
      {/* Header */}
      <h1 className="text-3xl text-center font-bold mb-4 text-blue-600">
        Weather App <FontAwesomeIcon icon={faHouse} />
      </h1>
      {/* Dark mode toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)} // Toggle dark mode state
          className={`px-4 py-2 rounded-md ${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      {/* Search box */}
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Enter city/town..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={searchPressed}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {/* Weather cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {weatherData.map((data, index) => renderWeatherCard(data, index))}
      </div>
    </div>
  );
};

export default WeatherApp;
