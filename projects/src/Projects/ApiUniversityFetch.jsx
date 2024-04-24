import { useState, useEffect } from "react";

const ApiUniversityFetch = () => {
  const [dataUniversity, setDataUniversity] = useState([]);

  useEffect(() => {
    const fetchDataUniversity = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=United+States"
        );
        const jsonData = await response.json();
        setDataUniversity(jsonData.slice(0, 6)); // Extracting the actual data array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataUniversity();
  }, []);

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        API University Fetch
      </h1>
      <ul className="divide-y divide-gray-200">
        {dataUniversity.map((item) => (
          <li key={item.name} className="py-4">
            <p className="text-lg font-semibold">{`University name: ${item.name}`}</p>
            <p>{`Code: ${item.alpha_two_code}`}</p>
            <p>{`Website: ${item.web_pages}`}</p>
            <p>{`Country: ${item.country}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiUniversityFetch;
