import React, { useState } from 'react'
import './general.css'
import ProfileSettings from './ProfileSettings'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import NoteInfo from './NoteInfo';
import NewNote from './NewNote';


const Profile = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active);
  }

//   shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
  return (
    <div className='flex'>
      {active ?
        <div className="left flex flex-col w-10/12 sm:w-72 text-white bg-neutral-800 px-3 z-10 h-[calc(100vh-70px)] rounded-br-2xl">
          <div className=' p-3 text-white flex flex-col items-center rounded-md'>
            <h1 className='font-bold text-xl w-max p-1 border border-b-sky-600 border-t-0 border-x-0 mb-3'>Rukiye Aydın</h1>
            <p className='w-max mb-5'>Total Notes: 13</p>
          </div>
          <ProfileSettings />
          <NewNote />
        </div> : null
      }

      <div onClick={handleActive} className="z-10">
        {active ? 
          <MdKeyboardDoubleArrowLeft className='left-arrow text-4xl bg-cyan-500 hover:bg-white hover:text-cyan-500 text-white cursor-pointer transition-all duration-300 rounded-br-full pr-2 pb-2'/> :
          <MdKeyboardDoubleArrowRight className='right-arrow text-4xl bg-cyan-500 hover:bg-white hover:text-cyan-500 text-white cursor-pointer transition-all duration-300 rounded-br-full pr-2 pb-2'/>
        }
      </div>

      <div className={active ? "right p-3 right fixed -z-10 opacity-50" : "right p-3 absolute"}>
        <div className="flex flex-col items-center justify-center">            
          <h1 className='text-3xl font-semibold m-5 bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text'>MY NOTES</h1>
          <div className='notes flex flex-wrap items-start justify-center '>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>
            <div className='note border shadow-md border-zinc-200 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                <div className="date border border-x-0 border-t-0 border-b-zinc-200 p-2 w-full flex items-center justify-center">
                    <p className='font-bold text-lg'>06 - 02 - 2024</p>
                </div>
                <div class="note-content p-3 bg-zinc-100">
                    <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                    <NoteInfo />
                </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
