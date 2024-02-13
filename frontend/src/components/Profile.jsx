import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './general.css'
import ProfileSettings from './ProfileSettings'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


const Profile = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <div className='flex'>
      {active ?
        <div className={`left flex flex-col h-screen w-10/12 md:w-1/3 text-white bg-neutral-800 p-3`}>
          <div className='bg-zinc-100 p-3 text-black flex flex-col items-center justify-center rounded-3xl'>
            <h1 className='font-bold text-xl w-max border border-b-gray-400 border-t-0 border-x-0 pb-1 mb-3'>Rukiye Aydın</h1>
            <p className='w-max mb-5'>Total Notes: 13</p>
          </div>
          <ProfileSettings />
          <Link className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-400 hover:to-cyan-400 text-white p-1 rounded-md w-28">
              <p className="mr-1">New note</p>
              <FaArrowRight />
          </Link>
        </div> : ""
      }

      <div onClick={handleActive} className="">
        {active ? 
          <MdKeyboardDoubleArrowLeft className='left-arrow text-3xl bg-rose-500 hover:bg-white hover:text-rose-500 text-white cursor-pointer'/> :
          <MdKeyboardDoubleArrowRight className='right-arrow text-3xl bg-rose-500 hover:bg-white hover:text-rose-500 text-white cursor-pointer'/>
        }
      </div>

      <div className="right p-3 absolute -z-10">
      <div className="flex flex-col items-center justify-center">            
        <h1 className='text-3xl font-semibold m-5 bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text'>My Notes</h1>
        <div className='notes flex flex-wrap items-start justify-center '>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <Link class="text-blue-500">Devamı...</Link>
                </div>
            </div>

            </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
