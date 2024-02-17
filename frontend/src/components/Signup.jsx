import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignUp = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      alert("Invalid e-mail!")
      return
    }
    fetch("http://localhost:5100/signup", {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.error){
        alert(data.error)
      }
      else{
        alert(data.message)
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='p-2 flex flex-col items-center justify-center'>
        <h1 className=' font-bold text-4xl my-5'>JOIN DN</h1>
        <input 
        type="text" 
        placeholder='Name' 
        className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder='Email' 
        className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder='Username' 
        className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder='Password' 
        className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
        className='bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 my-2 rounded-md'
        onClick={() => handleSignUp()}
        >
          Sign Up
        </button>
        <p>Have an account? <Link to="/login" className='text-red-600 hover:underline'>Login</Link></p>
    </div>
  )
}

export default Signup
