import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 min-h-screen bg-white shadow-md p-4 hidden md:block ">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">

          <a href="" className="block text-gray-700 hover:text-indigo-600">Overview</a>
          <a href="" className="block text-gray-700 hover:text-indigo-600">Users</a>
          <a href="" className="block text-gray-700 hover:text-indigo-600">Settings</a>

        </nav>
        
      </aside>
    </div>
  )
}

export default Sidebar