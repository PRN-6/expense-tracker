import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const App = () => {
  const [expenses, setExpenses] = useState([])
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  return (
    <div className='min-h-screen bg-gray-200 '>
        <h1 className="text-3xl font-bold text-center pb-6">
          Expense Tracker
        </h1>
        <div className='flex gap-4'>
          {/* left side */}
          <div className='w-1/2'>
            <ExpenseForm addExpense={addExpense}/>
          </div>

          {/* right side */}
          <div className='w-1/2 flex flex-col gap-5'>
            <div className='mt-6'>
              <h2 className='text-xl font-bold '>Total: ${total}</h2>
            </div>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
          </div>
        </div>
    </div>
  )
}

export default App