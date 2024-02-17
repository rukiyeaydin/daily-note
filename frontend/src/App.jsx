import './App.css'
import {Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"
import React, { useEffect, createContext, useReducer, useContext } from 'react'
import { reducer, initialState } from "./reducers/userReducer"

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import OthersProfile from './components/OthersProfile'
import Navbar from '../src/components/Navbar'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type: "USER", payload: user})
      navigate("/")
    } else{
      navigate("/login")
    }

  }, [])

  return(
    <Routes>
      <Route path='/' element={ state ? <Home/>  : <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/other-user' element={ <OthersProfile/> } />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state: state, dispatch: dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
