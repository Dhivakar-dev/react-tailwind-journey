import React, { useState } from 'react'
import Modal from './components/Modal.jsx'
import Toast from './components/Toast.jsx'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h1 className="text-xl font-semibold mb-4">Modal & Toast</h1>

        <button onClick={()=>setShowModal(true)}
        className='bg-indigo-600 rounded px-4 py-2 mb-3 w-full'>Open Modal</button>
        <button onClick={()=>setShowToast(true)}
        className='bg-green-600 rounded px-4 py-2 mb-3 w-full'>Show Toast</button>

        {showModal && <Modal onClose={() => setShowModal(false)} />}
        {showToast && <Toast onClose={() => setShowToast(false)} />}
      </div>
    </div>
  )
}

export default App