import Calculator from "./assets/Projects/Calculator";
import Counter from "./assets/Projects/Counter";
import Lists from "./assets/Projects/Lists";
import TimeInput from "./assets/Projects/TimeInput";
import ToDoList from "./assets/Projects/ToDoList";
import ToggleState from "./assets/Projects/ToggleState";

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
      <p>
        Source: <a>https://arc.net/l/quote/ivpzlpyn</a>
      </p>
    </div>
  );
};

export default App;
