import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="mb-4 space-y-2">
      {expenses.map((expense, index) => (
        <li key={index} className="flex justify-between bg-gray-100 px-3 py-2 rounded">
          <span>{expense.title}</span>
          <span>₹{expense.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
