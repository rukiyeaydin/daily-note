import './App.css'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import OthersProfile from './components/OthersProfile'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/other-user' element={ <OthersProfile/> } />
    </Routes>
  )
}

export default App
