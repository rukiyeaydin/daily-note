import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SearchUser = () => {
    const [showModal, setShowModal] = useState(false);


  return (
    <div className="flex flex-col items-center justify-center">
        
        <button onClick={() => setShowModal(true)}><FaSearch className='text-2xl text-white cursor-pointer'/></button>

        {showModal ? (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
                <div className="relative my-6 mx-auto w-11/12 md:w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center bg-white outline-none focus:outline-none text-black w-full">
                        <div className="flex items-center justify-center p-5 rounded-t w-full">
                            <h3 className="text-xl font-semibold border-b border-solid border-gray-300 pb-3 w-full text-center">
                            See Other's Notes
                            </h3>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full mb-5">
                            <div className='flex items-center justify-between w-1/2  mb-5 '>
                                <input type="text" className='border border-black rounded-md py-1 px-2 focus:outline-none text-sm w-full mr-2' placeholder='search username...' />
                                <button className='text-sm border border-rose-500 bg-rose-500 hover:bg-white hover:text-rose-500 text-white px-2 py-1 rounded-lg transition-all duration-200'>search</button>
                            </div>
                            <div className='profiles w-full flex flex-col items-center justify-center'>
                                <div className="profile border border-cyan-600 px-2 py-1 rounded-md my-2 w-1/2 text-sm">
                                    <Link>
                                        <p className='w-full truncate'>johndoesnjkbshbahsbhabshvahgsvghavghsvgavasgavgh</p>
                                    </Link>
                                </div>
                                <div className="profile border border-cyan-600 px-2 py-1 rounded-md my-2 w-1/2 text-sm">
                                    <Link>
                                        <p className='w-full truncate'>johndoesnjkbshbahsbhabshvahgsvghavghsvgavasgavgh</p>
                                    </Link>
                                </div>
                                <div className="profile border border-cyan-600 px-2 py-1 rounded-md my-2 w-1/2 text-sm">
                                    <Link>
                                        <p className='w-full truncate'>johndoesnjkbshbahsbhabshvahgsvghavghsvgavasgavgh</p>
                                    </Link>
                                </div>
                                <div className="profile border border-cyan-600 px-2 py-1 rounded-md my-2 w-1/2 text-sm">
                                    <Link>
                                        <p className='w-full truncate'>johndoesnjkbshbahsbhabshvahgsvghavghsvgavasgavgh</p>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <hr className='border-1 border-gray-300 w-52' />
                            <button className="text-rose-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150 my-4" type="button" onClick={() => setShowModal(false)} > Close </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
        ) : null}
    </div>
  )
}

export default SearchUser
