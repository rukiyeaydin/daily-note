import React from 'react'
import NoteInfo from './NoteInfo'
import NewNote from './NewNote'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-between'>

        <div className='bg-zinc-100 p-6 md:p-12 flex flex-col items-center justify-center mb-5'>
            <p className='font-bold text-2xl md:text-4xl'>How Does DN Works?</p>
            <br /><br />
            <p className='text-lg md:text-xl text-center'>Welcome to Dail Note, your simple solution for taking notes on the go!.</p>
            <br /><br />
            <div className="flex flex-col justify-center items-center min-[1250px]:flex-row">
                <div className="flex flex-row items-center w-full border-b-4 border-emerald-500 rounded-3xl my-4 md:mx-4 p-4">
                    <p className='text-6xl md:text-7xl font-bold mr-4'>1</p>
                    <div className="">
                        <p className='font-bold text-lg md:text-xl'>Capture and Organize</p>
                        <p className='text-base md:text-lg h-auto md:h-28'>With Daily Note, you can capture your fleeting thoughts, ideas, and experiences in a single, organized space. </p>
                    </div>
                </div>
                <div className="flex flex-row items-center w-full border-b-4 border-emerald-500 rounded-3xl my-4 md:mx-4 p-4">
                    <p className='text-6xl md:text-7xl font-bold mr-4'>2</p>
                    <div className="">
                        <p className='font-bold text-lg md:text-xl'>Reflect and Learn</p>
                        <p className='text-base md:text-lg h-auto md:h-28'>Daily Note goes beyond simple note-taking by offering powerful tools for reflection and learning.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center w-full border-b-4 border-emerald-500 rounded-3xl my-4 md:mx-4 p-4">
                    <p className='text-6xl md:text-7xl font-bold mr-4'>3</p>
                    <div className="">
                        <p className='font-bold text-lg md:text-xl'>Grow and Create</p>
                        <p className='text-base md:text-lg h-auto md:h-28'>Set goals, track your progress, and explore new topics and skills with the help of your organized notes.</p>
                    </div>
                </div>
            </div>
            <p className='font-bold my-10 text-xl'>You Can Create a Note Now.</p>
            <button className='w-36'><NewNote /></button>
        </div>

        <div className="flex flex-col items-center justify-center">            
          <h1 className='text-3xl font-semibold m-5 bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text'>EXPLORE</h1>
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
  )
}

export default Home
