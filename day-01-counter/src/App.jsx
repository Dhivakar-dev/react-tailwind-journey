import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  // }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-80 text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Counter App
          </h1>

          <p className="text-4xl font-bold mb-4 text-indigo-600 transition-transform duration-200 ease-in-out scale-105">
            {count}
          </p>

          <div className="flex justify-between mb-4">
            <button
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
              className={`px-4 py-2 rounded text-white ${
                count === 0
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              -
            </button>

            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Reset
            </button>

            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="text-sm text-indigo-500 underline"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
