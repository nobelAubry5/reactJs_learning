import Calculator from "./Projects/Calculator";
import Counter from "./Projects/Counter";
import Lists from "./Projects/Lists";
import TimeInput from "./Projects/TimeInput";
import ToDoList from "./Projects/ToDoList";
import ToggleState from "./Projects/ToggleState";
import ApiUniversityFetch from "./Projects/ApiUniversityFetch";
import WeatherApp from "./Projects/WeatherApp";
import DynamicBackgroundToggle from "./Projects/DynamicBackground";
const App = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <Counter />
      <TimeInput />
      <Lists />
      <ToggleState />
      <Calculator />
      <ToDoList />
      <DynamicBackgroundToggle />
      <ApiUniversityFetch />
      <WeatherApp />

      <p>
        Source: <a>https://arc.net/l/quote/ivpzlpyn</a>
      </p>
    </div>
  );
};

export default App;
