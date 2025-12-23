import React, { useEffect, useState } from 'react'

const App = () => {
  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState("");
  const[dark,setDark] = useState(false);
  const addTodo = () => {
    if(!input.trim()) return;

    setTodos([...todos, input]);
    setInput("");
  };
  useEffect(()=>{
    document.documentElement.classList.toggle("dark",dark);
  },[dark]);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded-xl mb-4 dark:bg-gray-600"
          placeholder="Add a new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='w-full bg-indigo-500 text-white py-2 rounded mb-4 hover:bg-indigo-600'
        onClick={addTodo}>Add Todo</button>

        <ul className="space-y-2">
          {todos.map((todo,index)=>(
            <li key={index}
             className="flex justify-between bg-gray-100 px-3 py-2 rounded">
            <span>{todo}</span>
            <button
            onClick={()=> setTodos(todos.filter((_,i) => i!==index))}
             className="text-red-500">Delete</button>
          </li>
          ))
            }
        </ul>

        <button onClick={()=> setDark(!dark)}
        className='text-sm text-indigo-500 underline text-center w-full mt-4'>Toggle Theme</button>
      </div>
    </div>
  )
}

export default App