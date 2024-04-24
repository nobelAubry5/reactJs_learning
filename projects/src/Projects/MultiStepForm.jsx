import { useState, useRef } from "react";

const MultiStepForm = () => {
  const [formData, setFormData] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValidity, setInputValidity] = useState([]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = value;
      return newData;
    });
    setInputValidity((prevValidity) => {
      const newValidity = [...prevValidity];
      newValidity[index] = value.trim() !== "";
      return newValidity;
    });
  };

  const handleNextStep = () => {
    if (inputValidity.every((valid) => valid)) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill out all fields before proceeding.");
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValidity.every((valid) => valid)) {
      // Do something with the form data, like submit it to a server
      console.log("Form submitted:", formData);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  const steps = [
    {
      label: "Step 1",
      inputs: ["Name", "Email", "Phone"],
    },
    {
      label: "Step 2",
      inputs: ["Address", "City", "Zip Code"],
    },
    {
      label: "Step 3",
      inputs: ["Username", "Password", "Confirm Password"],
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {steps[currentStep].label}
          </h2>
          {steps[currentStep].inputs.map((input, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={input} className="block mb-1">
                {input}:
              </label>
              <input
                type="text"
                id={input}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              />
              {!inputValidity[index] && (
                <p className="text-red-500 mt-1">This field is required</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md focus:outline-none"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
