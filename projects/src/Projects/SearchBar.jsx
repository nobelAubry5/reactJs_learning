import { useState, useRef, useMemo } from "react";
// Source inspiration: https://www.youtube.com/watch?v=E1cklb4aeXA
const SearchBar = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">SearchBar</h2>
      <label className="block mb-2">Search:</label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <form onSubmit={onSubmit} className="mt-4">
        <label className="block mb-1">New Item:</label>
        <input
          ref={inputRef}
          type="text"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter new item..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <h3 className="mt-4 text-lg font-semibold">Items:</h3>
      <div className="mt-2">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white shadow-sm rounded-md p-2 mb-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
