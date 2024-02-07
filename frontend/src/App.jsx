import './App.css'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
    </Routes>
  )
}

export default App
