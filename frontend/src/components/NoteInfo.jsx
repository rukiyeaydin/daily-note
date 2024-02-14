import React, { useState } from "react";

const NoteInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);

  return (
    <div className="">
        <button className="text-blue-500" onClick={() => setShowModal(true)}>See more...</button>
        {showModal ? (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
                <div className="relative my-6 mx-auto w-11/12 md:w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-full bg-white outline-none focus:outline-none text-black">
                        <div className="flex items-center justify-center p-5 rounded-t w-11/12 ">
                            {isEditClicked 
                                ?
                                <input type="text" className="border-2 border-gray-300 focus:outline-none font-bold text-md resize-none rounded-md px-2 py-1 w-7/12" /> 
                                :
                                <h3 className="text-xl font-semibold border-b border-solid border-gray-300 pb-3 w-full text-center">Note Header</h3>
                            }
                            
                            <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                            >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex flex-col items-center justify-center w-full">
                            {isEditClicked 
                                ? 
                                <textarea type="text" className="border-2 border-gray-400 p-2 w-11/12 h-52 focus:outline-none text-sm resize-none rounded-md" /> 
                                :
                                <div className="flex flex-col items-center justify-center">
                                    <p className="mb-10 w-11/12 max-h-52 overflow-y-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, debitis. Voluptate placeat quibusdam sit repellat sequi magnam vero! Perferendis, corrupti nihil qui modi officiis explicabo sint quidem, quis architecto magnam ullam ipsum perspiciatis nemo suscipit at distinctio. Quis voluptatum nemo aliquid voluptates eum, vero obcaecati sequi! Eveniet assumenda eius sequi veniam commodi ipsam quia! Optio velit non voluptatum vero, placeat necessitatibus! Adipisci mollitia recusandae explicabo voluptas, in minima at pariatur quisquam ullam dignissimos repudiandae totam natus, suscipit amet esse temporibus!</p>
                                    <hr className="border-1 border-gray-300 w-72 mb-2"/>
                                    <p className="italic">14 / 02 / 2024</p>
                                    <hr className="border-1 border-gray-300 w-72 mt-2"/>
                                </div>
                            }

                        </div>
                        <div className="flex items-center justify-end pb-4 rounded-b">
                            <button
                            className="text-rose-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                            >
                            Close
                            </button>
                            <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsEditClicked(!isEditClicked)}
                        >
                            {isEditClicked ? "Save" : "Edit"}
                        </button>
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

export default NoteInfo
