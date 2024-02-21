import React, { useState } from "react";

const NewNote = () => {
    const [showModal, setShowModal] = useState(false);
    const [header, setHeader] = useState("")
    const [content, setContent] = useState("")

    const createNote = () => {
      fetch("http://localhost:5100/create-note", {
        method: "post",
        headers: {
          "Content-Type":"application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          header: header,
          content: content,
        })
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.error){
          alert(data.error)
        }
        else{
          alert("New note created")
          window.location.reload()
        }
      }).catch(err => {
        console.log(err)
      })

      setShowModal(false)
    }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="text-white bg-cyan-600 hover:scale-105 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-11/12"
        type="button"
        onClick={() => setShowModal(true)}
      >
        New Note
      </button>
      {showModal ? (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            <div className="relative my-6 mx-auto w-11/12 md:w-1/2">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center bg-white outline-none focus:outline-none text-black">
                <div className="flex flex-col items-center justify-center p-5 rounded-t">
                  <h3 className="text-xl font-semibold border-b border-solid border-gray-300 pb-3">
                    Create New Note
                  </h3>
                  <input 
                  type="text" 
                  className="mt-5 border border-gray-400 focus:outline-none rounded-md px-2 py-1 text-sm" 
                  placeholder="Note header..." 
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                  />
                </div>
                <div className="relative pb-6 flex flex-col items-center justify-center w-full">
                    <textarea 
                    type="text" 
                    className="border-2 border-gray-400 p-2 w-11/12 h-52 focus:outline-none text-sm resize-none rounded-md" 
                    placeholder="Note content..." 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-rose-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={createNote}
                  >
                    Save Changes
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

export default NewNote
