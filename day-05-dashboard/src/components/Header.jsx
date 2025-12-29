import React from 'react'

const Header = () => {
  return (
    <header className='bg-white px-6 py-4 shadow-sm  flex justify-between items-center '>
      <h1 className="text-lg  font-semibold">OverView</h1>
      <button className="bg-indigo-500 px-4 py-1 rounded text-white">Logout</button>
    </header>
  )
}

export default Header