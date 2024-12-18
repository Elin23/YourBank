// import { Routes, Route } from 'react-router-dom';
// import About from './Pages/About/About'
// import Careers from './Pages/Careers/Careers'
// import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
// import Security from './Pages/Security/Security'
// import SignUp from './Pages/SignUp/SignUp'
import "./App.css";
//  
import ProductSectionComponent from "./Components/ProductSectionComponent/ProductSectionComponent";
// import TitleComponent from "./Components/TitleComponent/TitleComponent";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/security' element={<Security />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes> */}
      {/* <TitleComponent
        titleLeft=""
        desc="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
        span="ccccc"
        titleRight="aaaaa"
      /> */}
      <ProductSectionComponent />
      {/* <ProductCardComponent/> */}
    </>
  );
}

export default App;
