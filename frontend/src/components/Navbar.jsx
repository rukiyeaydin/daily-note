import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-900 flex items-center justify-between p-5'>
        <h1 className='text-white text-2xl font-bold'>DN</h1>
        <div className='flex items-center justify-center'>
          <Link className='text-white bg-cyan-500 hover:bg-cyan-400 font-bold px-3 py-2 rounded-md mr-3 transition-all'>My Notes</Link>
          <Link className='text-white bg-emerald-500 hover:bg-emerald-400 font-bold px-3 py-2 rounded-md transition-all mr-3'>New</Link>
          <Link className='text-white text-xl px-2 py-1 rounded-md border-2 border-purple-400 hover:bg-purple-400 transition-all'><p>R</p></Link>
        </div>
    </div>
  )
}

export default Navbar
