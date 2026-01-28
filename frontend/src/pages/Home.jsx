import React, { useState } from 'react'
import NavBar from '../components/NavBar'
const Home = () => {
//   const [expenses, setExpenses] = useState([])
//   const addExpense = (expense) => {
//     setExpenses([...expenses, expense])
//   }

//   const deleteExpense = (id) => {
//     setExpenses(expenses.filter(expense => expense.id !== id))
//   }

//   const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <>
      <NavBar/>
    <div className='text-5xl font-semibold w-1/2 p-16 my-16'>
      <h1>Expense tracker to track your day to day spendings</h1>        
    </div>
    <div className='p-16'>
      <button className='border rounded-4xl p-4 font-bold cursor-pointer bg-gray-600 text-white '>Register</button>
    </div>

{/* //       <nav className="bg-white p-4 shadow-md mb-6">
//         <div className="container mx-auto flex gap-4">
//           <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
//           <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
//         </div>
//       </nav>
      
//        */}
    </>
  )
}

export default Home