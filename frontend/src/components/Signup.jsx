import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='p-2 flex flex-col items-center justify-center'>
        <h1 className=' font-bold text-4xl my-5'>JOIN DN</h1>
        <input type="text" placeholder='Name' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <input type="text" placeholder='Email' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <input type="text" placeholder='Username' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <input type="text" placeholder='Password' className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' />
        <button className='bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 my-2 rounded-md'>Sign Up</button>
        <p>Have an account? <Link to="/login" className='text-red-600 hover:underline'>Login</Link></p>
    </div>
  )
}

export default Signup
