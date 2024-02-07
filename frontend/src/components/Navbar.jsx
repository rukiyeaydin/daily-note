import React from 'react'
import { Link } from 'react-router-dom'
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

const Navbar = () => {
  return (
    <div className='bg-zinc-900 flex items-center justify-between p-5'>
        <Link to='/' className='text-white text-2xl font-bold'>DN</Link>
        <div className='flex items-center justify-center'>
          <Link className='text-white bg-emerald-500 hover:bg-emerald-400 font-bold px-3 py-2 rounded-md transition-all mr-3'>New</Link>
          <TEDropdown className="flex justify-center">
            <TERipple rippleColor="light">
              <TEDropdownToggle className="flex items-center text-white text-xl py-1 px-2 rounded-md border-2 border-purple-400 hover:bg-purple-400 transition-all"><p>R</p></TEDropdownToggle>
            </TERipple>
            <TEDropdownMenu className='bg-zinc-900 text-white border-2 border-purple-400 mt-1 p-3 rounded-md'>
              <TEDropdownItem className='mb-2'><Link to='/my-notes' className='hover:text-purple-300'>My Notes</Link></TEDropdownItem>
              <TEDropdownItem className='mb-2'><Link to="/profile" className='hover:text-purple-300'>Profile</Link></TEDropdownItem>
              <TEDropdownItem><Link className='hover:text-purple-300'>Log Out</Link></TEDropdownItem>
            </TEDropdownMenu>
          </TEDropdown>
        </div>
    </div>
  )
}

export default Navbar
