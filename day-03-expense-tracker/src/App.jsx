import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'

const App = () => {
  const [expenses, setExpenses] = useState([])
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>

      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
        <ExpenseForm onAddExpense={setExpenses}
        expenses={expenses} />
        <ExpenseList expenses={expenses} />
        <ExpenseTotal expenses={expenses} />
      </div>
      
    </div>
  )
}

export default App