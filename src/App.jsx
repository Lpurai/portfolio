import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Home from "./pages/Home";
import './index.css';
import reactLogo from './assets/react.svg'
import tailwind from './assets/tailwind.png';
function App() {
  return (
<>
<nav className="flex flex-row justify-between bg-background text-primary h-16 p-3 rounded-md shadow-lg w-full font-extrabold fixed top-0 right-0">
         <div className='flex flex-row mr-1 md:mr-5 sm:flex-row  space-x-5 ' ><img src={tailwind} alt="tailwind-icon" className="img-icon" />
           <img src={reactLogo} alt="react-logo"/>
           <h2 className="hidden md:inline-block ">Portfolio</h2>
         </div>
         <div className='flex flex-row  space-x-5 justify-end mr-8'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
         </div>
     </nav>
      

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>  
 
  )
}

export default App
