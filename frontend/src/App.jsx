import React from 'react'
import ExpenseForm from './ExpenseForm'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex flex-col items-center justify-center'>
      <div className='w-full max-w-md'>
        <h1 className="text-3xl font-bold text-center pb-6">
          Expense Tracker
        </h1>
        <ExpenseForm />
      </div>
    </div>
  )
}

export default App