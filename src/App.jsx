import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About'
import Careers from './Pages/Careers/Careers'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Security from './Pages/Security/Security'
import SignUp from './Pages/SignUp/SignUp'
import './App.css'

function App() {
  return (
    <>
    <p>elin testing branch</p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/security' element={<Security />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
