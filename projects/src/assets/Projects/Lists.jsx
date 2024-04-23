const Lists = () => {
  const datas = [
    { firstName: "Aubry", lastName: "Nobel", age: 20 },
    { firstName: "John", lastName: "Doe", age: 22 },
    { firstName: "Jane", lastName: "Grey", age: 25 },
    { firstName: "Clark", lastName: "Kent", age: 21 },
  ];

  const showingData = datas.map((data, index) => (
    <div key={index} className="mx-auto bg-white shadow-md rounded-md mb-4">
      <ul className="p-4">
        <li>
          <img
            src="https://placehold.co/100x100"
            alt={data.firstName + " " + data.lastName}
            className="rounded-full"
          />
        </li>
        <li className="text-lg font-bold mt-2">
          {data.firstName} {data.lastName}
        </li>
        <li className="text-gray-600">Age: {data.age}</li>
      </ul>
    </div>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">
        Displaying a list of items
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {showingData}
      </div>
    </>
  );
};

export default Lists;
