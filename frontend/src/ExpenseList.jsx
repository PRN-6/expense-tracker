import React from 'react'

const ExpenseList = ({expenses,deleteExpense}) => {
  return (
    <div>
        <h2>Expense List</h2>
        <div className='flex flex-col gap-5 mx-5'>
            {expenses.map((expense) => (
                <div 
                key={expense.id}    
                className='space-y-2 border border-gray-300 rounded p-4 bg-white'>
                    <h3>{expense.description}</h3>
                    <p>{expense.amount}</p>
                    <button 
                    className='bg-red-500 text-white px-2 py-1 rounded-lg cursor-pointer'
                    onClick={() => deleteExpense(expense.id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExpenseList