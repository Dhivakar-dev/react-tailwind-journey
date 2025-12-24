import React from 'react'

const ExpenseTotal = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <div className='font-bold text-right'>Total: ₹{total}</div>
  )
}

export default ExpenseTotal