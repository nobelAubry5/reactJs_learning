import { useState } from "react";

const TimeInput = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    // The event. preventDefault() line prevents the form from actually submitting.
    // When the user clicks the "Submit" button, the input value is logged to the console.
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to a server or updating a parent component's state
    console.log("Name:", name);
    console.log("Birthdate:", birthdate);
  };
  const handleReset = () => {
    setName("");
    setBirthdate("");
  };
  // onChange: This is an event handler attribute in React. It is used to capture changes to an input element,
  // such as when the user types into a text input field or selects an option in a dropdown menu.

  // (e) => setName(e.target.value): This is an arrow function that serves as the event handler for the onChange event.
  // It takes an event object e as its argument. Inside the function body, it calls the setName function with e.target.value as its argument.

  // e : This is the event object that contains information about the event that occurred.
  // In this case, it represents the change event that was triggered by the user's interaction with the input element.

  // e.target.value : This is the value of the input element that triggered the change event. For input elements like text inputs, textareas,
  // and select dropdowns, this represents the current value entered by the user.

  //So, putting it all together, onChange={(e) => setName(e.target.value)} sets up an event listener that listens for changes to an input element
  // and updates the name state variable in the React component with the value entered by the user.

  return (
    <div className="mx-auto p-4 bg-slate-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        Displaying Inputs Project
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          // We keep the value attribute so that when the reset button clicked, it clears the input.
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <div></div>
        <label className="block mb-2" htmlFor="birthdate">
          Enter your birth date:
        </label>
        <input
          type="date"
          id="birthdate"
          // We keep the value attribute so that when the reset button clicked, it clears the input.
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Reset inputs
        </button>
      </form>
      <div className="mt-4">
        <p className="font-bold">Name: {name}</p>
        <p className="font-bold">Birthdate: {birthdate}</p>
      </div>
    </div>
  );
};

export default TimeInput;
