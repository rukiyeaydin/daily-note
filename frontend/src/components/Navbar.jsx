import React from 'react'
import { Link } from 'react-router-dom'
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
} from "tw-elements-react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex items-center justify-center p-3 bg-neutral-800 shadow-[0_3px_5px_rgba(0,0,0,0.04)]'>
      <div className='flex items-center justify-between w-full'>
        <FaSearch className='text-2xl text-white cursor-pointer'/>
        <TEDropdown className="flex justify-center">
          <TEDropdownToggle className="flex items-center bg-white text-rose-500 text-2xl py-1 px-2 rounded-md border-2 border-transparent hover:text-rose-300 transition-all"><p className=''>R</p></TEDropdownToggle>
          <TEDropdownMenu className='border-2 bg-neutral-800 border-none p-3 mt-4 rounded-md text-right w-28'>
            <TEDropdownItem className='mb-2'><Link to='/' className='text-white hover:text-sky-200 transition-all'>Home</Link></TEDropdownItem>
            <TEDropdownItem className='mb-2'><Link to="/profile" className='text-white hover:text-sky-200 transition-all'>Profile</Link></TEDropdownItem>
            <hr className="my-2 h-0 border border-t-0 border-solid border-white opacity-50 dark:border-white" />
            <TEDropdownItem><Link className='text-rose-500 hover:text-rose-400'>Log Out</Link></TEDropdownItem>
          </TEDropdownMenu>
        </TEDropdown>
      </div>
    </div>
  )
}

export default Navbar
