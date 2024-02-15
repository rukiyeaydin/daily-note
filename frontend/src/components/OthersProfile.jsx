import React from 'react'
import NoteInfo from './NoteInfo'

const OthersProfile = () => {
  return (
    <div className='my-5 flex- flex-col'>
        <div className='flex flex-col items-center justify-center pb-5 shadow-[0_3px_5px_rgba(0,0,0,0.1)]'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text'>John Doe</h1>
            <h1 className='text-xl text-gray-500'>17 Notes</h1>
        </div>

        <div className="right p-3 absolute min-h-screen mt-5">
            <div className="flex flex-col items-center justify-center">            
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
                </div>
            </div>
        </div>

    </div>
  )
}

export default OthersProfile
