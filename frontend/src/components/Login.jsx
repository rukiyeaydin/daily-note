import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../App"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {state, dispatch} = useContext(UserContext)

  const handleLogin = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      alert("Invalid e-mail")
      return
    }
    fetch("http://localhost:5100/login", {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.error){
        alert(data.error)
      }
      else{
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type: "USER", payload: data.user})
        alert("giriş başarılı")
        navigate('/')
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='flex flex-col items-center justify-center my-5'>
        <h1 className='font-bold text-4xl my-5'>LOGIN</h1>
        <input 
        type="text" 
        placeholder='Email' 
        className=' border-solid border border-sky-600 focus:outline-none p-2 rounded-md my-2' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        onClick={() => handleLogin()}
        >
          Login
        </button>
        <p>Don't have an account? <Link to="/signup" className='text-red-600 hover:underline'>Sign Up</Link>
        </p>
    </div>
  )
}

export default Login
