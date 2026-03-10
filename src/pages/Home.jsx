import { Routes, Route, Link } from "react-router-dom";
import About from "../pages/about";
import linkedn from '../assets/linkedn.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.jpeg'

import pic from '../assets/843.png'

const Home = () => {
  return (
    <>
 <div className='p-0 mt-16 px-0'>  
     <h2 className="pt-5 md:hidden">Portfolio</h2>
     <div className="flex flex-col  sm:flex-row">
       <div className=" flex flex-row space-x-5 order-3 w-full h-1/4 sm:flex-col sm:order-1 p-4 justify-center sm:space-y-5 mb-25 sm:h-screen sm:w-1/4">
         <div><a href="https://linkedin.com/in/LpuraiLekalantula" target='_blank'><img src={linkedn} alt="linkedn-icon" className='img-icon'/></a> </div>
                   <div><a href="https://github.com/lpurai" target='_blank'><img src={github} alt="github-icon" className='img-icon' /> </a></div>
                   <div><a href="https://instagram.com/codemaestro_25" target='_blank'><img src={instagram} alt="instagram-icon" className='img-icon' /></a></div>
                   <div><a href="https://x.com/lpurai6624" target='_blank'><img src={twitter} alt="twitter-icon" className='img-icon'/></a></div>
       </div>
       <div className=" order-1 flex flex-col space-y-5 mt-10 h-1/2 p-5 w-full sm:order-2 sm:w-1/2 sm:h-screen">
         
         <p> &#128075;Hey</p>
         <h1 className="font-extrabold text-4xl font-serif">I'm Lpurai Lekalantula</h1>
         <p>
         I focus on developing user-friendly web applications that meet the client's requirements,with attention to detail,scalability and performance.
         </p>
         <button className="btn"> <Link to="/about">About Me</Link></button>
       </div>
       <div className=" order-1 flex justify-center w-full  sm:order-3 sm:w-1/2">
       <img src={pic} alt="pic" className='border-accent rounded-full w-full h-auto shadow-lg  min-sm:h-1/2  min-lg:h-3/4 '/>
       </div>
 
     </div>
     
   </div>
    <Routes>
        <Route path="/about" element={<About Me />} />
      </Routes>
   
  </>
  );
};

export default Home;