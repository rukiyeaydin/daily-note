import React from 'react'
import { Link } from 'react-router-dom'
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
} from "tw-elements-react";

const Navbar = () => {
  return (
    <div className='flex items-center justify-end w-full'>
      <div className='w-24 h-24 flex items-center justify-center bg-black rounded-bl-full pb-5 pl-5'>
        <TEDropdown className="flex justify-center">
          <TEDropdownToggle className="flex items-center text-white text-2xl py-1 px-2 rounded-md border-2 border-emerald-500 hover:bg-emerald-500 transition-all"><p>R</p></TEDropdownToggle>
          <TEDropdownMenu position='dropleft' className='bg-black border-2 border-emerald-500 text-white p-3 mr-1 rounded-md text-right'>
            <TEDropdownItem className='mb-2'><Link to='/' className='hover:text-emerald-400'>Home</Link></TEDropdownItem>
            <TEDropdownItem className='mb-2'><Link to='/my-notes' className='hover:text-emerald-400'>My Notes</Link></TEDropdownItem>
            <TEDropdownItem className='mb-2'><Link to="/profile" className='hover:text-emerald-400'>Profile</Link></TEDropdownItem>
            <hr className="my-2 h-0 border border-t-0 border-solid border-white opacity-75 dark:border-white" />
            <TEDropdownItem><Link className='hover:text-red-500'>Log Out</Link></TEDropdownItem>
          </TEDropdownMenu>
        </TEDropdown>
      </div>
    </div>
  )
}

export default Navbar
