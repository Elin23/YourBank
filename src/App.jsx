import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About'
import Careers from './Pages/Careers/Careers'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Security from './Pages/Security/Security'
import SignUp from './Pages/SignUp/SignUp'
import "./App.css";
import NavBarComponent from './Components/NavBarComponent/NavBarComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/security' element={<Security />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
