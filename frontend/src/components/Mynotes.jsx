import React from 'react'
import { Link } from 'react-router-dom'

const Mynotes = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
        <div className="flex flex-col items-center justify-center">
            <h1 className='text-3xl font-semibold m-5'>My Notes</h1>
            <div className='notes flex flex-wrap items-start justify-center '>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-purple-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-green-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-sky-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-yellow-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-orange-300">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-gray-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>
                <div className='note border border-zinc-400 flex flex-col items-center w-11/12 min-[600px]:w-2/5 md:w-80 m-3 rounded-md'>
                    <div className="date border border-x-0 border-t-0 border-b-zinc-400 p-2 w-full flex items-center justify-center">
                        <p className='font-bold text-lg'>06 - 02 - 2024</p>
                    </div>
                    <div class="note-content p-3 bg-rose-200">
                        <p class="h-24 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae corrupti aperiam nam. Pariatur laborum voluptate autem ullam. Consequuntur nobis cupiditate maiores. Illum delectus, similique ut veritatis ea minus iste quas porro corporis eius, nostrum repellendus nam. Saepe, at possimus, consectetur alias assumenda eligendi, voluptate nam natus sunt aut quas?</p>
                        <Link class="text-blue-500">Devamı...</Link>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Mynotes
