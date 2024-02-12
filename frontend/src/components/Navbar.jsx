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
    <div className='flex items-center justify-center p-3 bg-white shadow-[0_3px_5px_rgba(0,0,0,0.04)]'>
      <div className='flex items-center justify-between w-full'>
        <FaSearch className='text-2xl text-rose-500 cursor-pointer'/>
        <TEDropdown className="flex justify-center">
          <TEDropdownToggle className="flex items-center text-white text-2xl py-1 px-2 rounded-md border-2 border-rose-500 bg-rose-500 hover:bg-white hover:text-rose-500 transition-all"><p className=''>R</p></TEDropdownToggle>
          <TEDropdownMenu className='bg-white border-2 border-rose-500 text-white p-3 mt-1 rounded-md text-right'>
            <TEDropdownItem className='mb-2'><Link to='/' className='text-rose-500 hover:text-black transition-all'>Home</Link></TEDropdownItem>
            <TEDropdownItem className='mb-2'><Link to="/profile" className='text-rose-500 hover:text-black transition-all'>Profile</Link></TEDropdownItem>
            <hr className="my-2 h-0 border border-t-0 border-solid border-black opacity-25 dark:border-white" />
            <TEDropdownItem><Link className='text-black hover:text-gray-600'>Log Out</Link></TEDropdownItem>
          </TEDropdownMenu>
        </TEDropdown>
      </div>
    </div>
  )
}

export default Navbar
