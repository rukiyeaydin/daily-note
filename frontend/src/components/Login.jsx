import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center my-5'>
        <h1 className='font-bold text-4xl my-5'>LOGIN</h1>
        <input type="text" placeholder='Email' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <input type="text" placeholder='Password' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <button className='bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 my-2 rounded-md'>Login</button>
        <p>Don't have an account? <Link to="/signup" className='text-red-600 hover:underline'>Sign Up</Link>
        </p>
    </div>
  )
}

export default Login
