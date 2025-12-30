import React from 'react'

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className='bg-white p-6 rounded shadow-md w-80 ' >
        <h2 className="mb-4">Confirm Action</h2>
        <p className="mb-4">Are you sure you want to proceed?</p>
        <div className="flex justify-end gap-3">
          <button className="px-4 py-1 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 bg-indigo-600 text-white rounded" onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Modal