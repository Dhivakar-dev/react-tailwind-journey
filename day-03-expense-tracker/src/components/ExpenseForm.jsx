import React, { useState } from 'react'

const ExpenseForm = ({expenses, onAddExpense}) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const addExpense = () => {
        if(!title || !amount) return;

        onAddExpense([...expenses, {title, amount: Number(amount)}]);
        setTitle('');
        setAmount('');
    };
  return (
    <div className='mb-4'>
        <input value={title}
        onChange={(e)=>setTitle(e.target.value)}
        type="text" placeholder='Expense name' 
        className='w-full border px-3 py-2 rounded mb-2' />
        <input value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        type="number" placeholder='Expense amount'  
        className='w-full border px-3 py-2 rounded mb-2'/>
        <button onClick={addExpense} className='w-full bg-indigo-500 text-white py-2 rounded 
        hover:bg-indigo-700 transition-colors duration-300'>Add Expense</button>
    </div>
  )
}

export default ExpenseForm