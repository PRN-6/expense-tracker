import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Home = () => {
  const [expenses, setExpenses] = useState([])
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <>
      <nav className="bg-white p-4 shadow-md mb-6">
        <div className="container mx-auto flex gap-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
        </div>
      </nav>
      
      <div className='min-h-screen bg-gray-200 '>
        <h1 className="text-3xl font-bold text-center pb-6">
          Expense Tracker
        </h1>
        <div className='flex gap-4'>
          <div className='w-1/2'>
            <ExpenseForm addExpense={addExpense}/>
          </div>
          <div className='w-1/2 flex flex-col gap-5'>
            <div className='mt-6'>
              <h2 className='text-xl font-bold '>Total: ${total}</h2>
            </div>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home