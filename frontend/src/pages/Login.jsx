import React from 'react'
import NavBar from '../components/NavBar'

const Login = () => {
  return (
    <>
    <NavBar/>

    <div className='flex items-center justify-center border rounded-lg p-6 mx-auto max-w-md mt-20'>
      <div className='flex flex-col gap-4 py-6'>
        <h1>Login</h1>
        <input className='rounded-lg border p-2' type="text" placeholder="Username"/>
        <input className='rounded-lg border p-2' type="password" placeholder="Password"/>
        <button className='rounded-lg border p-2'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login