import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
} from "tw-elements-react";
import SearchUser from './SearchUser'
import { UserContext } from '../App'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.clear()
    dispatch({type: "CLEAR"})
    navigate("/login")
  }

  return (
    <div className='flex items-center justify-center p-3 bg-neutral-800 shadow-[0_3px_5px_rgba(0,0,0,0.04)]'>
      <div className='flex items-center justify-between w-full'>
        <SearchUser />
        
        <TEDropdown className="flex justify-center">
          <TEDropdownToggle className="flex items-center bg-white text-black text-2xl py-1 px-2 rounded-md border-2 border-transparent hover:text-rose-500 transition-all"><p className=''>R</p></TEDropdownToggle>
          <TEDropdownMenu className='mt-4 text-right rounded-md'>
            <div className='bg-white p-2 w-24 border-2 rounded md border-gray-300'>
              <TEDropdownItem className='mb-2'><Link to='/' className='text-black hover:text-sky-300 transition-all'>Home</Link></TEDropdownItem>
              <TEDropdownItem className='mb-2'><Link to="/profile" className='text-black hover:text-sky-300 transition-all'>Profile</Link></TEDropdownItem>
              <hr className="my-2 h-0 border border-t-0 border-solid border-gray-300 dark:border-white" />
              <TEDropdownItem><Link className='text-rose-500 hover:text-rose-400' onClick={() => handleLogOut()}>Log Out</Link></TEDropdownItem>
            </div>
          </TEDropdownMenu>
        </TEDropdown>
      </div>
    </div>
  )
}

export default Navbar
