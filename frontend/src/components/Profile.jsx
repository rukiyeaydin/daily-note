import React, { useState } from 'react'
import './general.css'
import ProfileSettings from './ProfileSettings'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Profile = () => {
  const [active, setActive] = useState(true)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <div className='flex'>
      {active ?
        <div className={`left flex flex-col h-screen w-10/12 md:w-1/3 bg-zinc-100 p-3`}>
          <h1 className='font-bold text-xl w-max border border-b-slate-400 border-t-0 border-x-0 pb-1 mb-3'>Rukiye Aydın</h1>
          <p className='w-max mb-5'>Total Notes: 13</p>
          <p className='font-bold text-xl w-max border border-b-slate-400 border-t-0 border-x-0 my-3'>General</p>
          <ProfileSettings />
        </div> : ""
      }

      <div onClick={handleActive} className={`icon-container ${active ? 'left-icon' : 'right-icon'}`}>
        {active ? 
          <MdKeyboardDoubleArrowLeft className='left-arrow text-3xl border-2 border-rose-500 bg-rose-500 hover:bg-white hover:text-rose-500 text-white cursor-pointer rounded-r-md'/> :
          <MdKeyboardDoubleArrowRight className='right-arrow text-3xl border-2 border-rose-500 bg-rose-500 hover:bg-white hover:text-rose-500 text-white cursor-pointer rounded-r-md'/>
        }
      </div>

      <div className="right">
        <h1>nsjnajsn sjkanjsa jsaj</h1>
      </div>

    </div>
  )
}

export default Profile
