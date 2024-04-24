import { Link, Route, Routes } from "react-router-dom";
import Calculator from "./Projects/Calculator";
import Counter from "./Projects/Counter";
import Lists from "./Projects/Lists";
import TimeInput from "./Projects/TimeInput";
import ToDoList from "./Projects/ToDoList";
import ToggleState from "./Projects/ToggleState";
import ApiUniversityFetch from "./Projects/ApiUniversityFetch";
import WeatherApp from "./Projects/WeatherApp";
import DynamicBackgroundToggle from "./Projects/DynamicBackground";
import Home from "./Home";
import NotFound from "./NotFound";
import SearchBar from "./Projects/SearchBar";
import MultiStepForm from "./Projects/MultiStepForm";

const sidebarLinks = [
  { path: "/", text: "Accueil" },
  { path: "/counter", text: "Compteur" },
  { path: "/lists", text: "Listes" },
  { path: "/timeinput", text: "Time Input" },
  { path: "/toggleState", text: "Toggle State" },
  { path: "/calculator", text: "Calculator" },
  { path: "/toDoList", text: "To Do List" },
  { path: "/dynamicBackground", text: "Dynamic Background" },
  { path: "/apiUniversityFetch", text: "API University Fetch" },
  { path: "/weatherApp", text: "Weather App" },
];
const routePaths = [
  { path: "/", element: <Home /> },
  { path: "/counter", element: <Counter /> },
  { path: "/lists", element: <Lists /> },
  { path: "/timeinput", element: <TimeInput /> },
  { path: "/toggleState", element: <ToggleState /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/toDoList", element: <ToDoList /> },
  { path: "/dynamicBackground", element: <DynamicBackgroundToggle /> },
  { path: "/apiUniversityFetch", element: <ApiUniversityFetch /> },
  { path: "/weatherApp", element: <WeatherApp /> },
  { path: "/searchApp", element: <SearchBar /> },
  { path: "/multiForm", element: <MultiStepForm /> },

  { path: "/*", element: <NotFound /> },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-600 bg-opacity-25 text-black w-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">React Projects</h1>
          <ul className="mt-4">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block py-2 px-4 text-black hover:bg-gray-700 hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <Routes>
          {routePaths.map((route, index) => (
            <>
              <Route key={index} path={route.path} element={route.element} />
            </>
          ))}
        </Routes>
        <p>
          Source: <a>https://arc.net/l/quote/ivpzlpyn</a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
