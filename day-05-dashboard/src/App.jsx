import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='min-h-screen flex bg-gray-100'>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>

    </div>
  )
}

export default App