import React from 'react'
import { Link } from 'react-router-dom' 


const NavBar = () => {
  return (
    <nav className='flex justify-between p-4'>
          <h1 className='text-xl font-bold'>Expense Tracker</h1>
          <div className='flex gap-4'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
          </div>
      </nav>
  )
}

export default NavBar