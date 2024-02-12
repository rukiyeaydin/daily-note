import './App.css'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path='/profile' element={ <Profile /> } />
    </Routes>
  )
}

export default App
