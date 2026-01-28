import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

const Expense = () => {
  return (
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
  )
}

export default Expense