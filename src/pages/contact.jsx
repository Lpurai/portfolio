import linkedn from '../assets/linkedn.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.jpeg';
import { Link,Route,Routes } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Projects from './projects';

const Contact = () => {
  return (
    <>
    <div className="p-3 mt-13">
      <h2>Let's Work Together.</h2>
     <p>Have a project idea,collaboration opportunity,or just want to say hello? I am always open to discussing new ideas,creative projects,and meaningful partnerships.</p>
     </div>
    <div className=" m-3 md:m-10 ">
      <div className="bg-white border  border-light-blue rounded-xl shadow-m p-3 flex flex-col space-y-2 w-full  lg:w-3/8">
      <label>Please fill the form below:</label>
      <input type="text" placeholder="Enter Your name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject"/>
      <textarea placeholder="Message" className="w-full border border-blue-200 bg-blue-50 rounded-xl p-4 align-text-top focus:outline-none focus:ring-blue-300 focus:ring-2"></textarea>
      <input type="submit" className="btn"/>
    </div>
     
    </div>
    <div className="flex flex-col space-y-3 absolute bottom-3 left-10 md:50">
      <div>
        <label htmlFor="">Email:</label><a href="mailto:yourname@email.com?subject=Portfolio Inquiry" className='font-extralight underline'>lpurailekalantula19@gmail.com </a>
      </div>
        <div className=" flex flex-row space-x-2 md:flex flex:row md:space-x-6">
          <h2 >Social Media accounts:</h2>
          <div><a href="https://linkedin.com/in/LpuraiLekalantula" target='_blank'><img src={linkedn} alt="linkedn-icon" className='img-icon'/></a> </div>
          <div><a href="https://github.com/lpurai" target='_blank'><img src={github} alt="github-icon" className='img-icon' /> </a></div>
          <div><a href="https://instagram.com/codemaestro_25" target='_blank'><img src={instagram} alt="instagram-icon" className='img-icon' /></a></div>
          <div><a href="https://x.com/lpurai6624" target='_blank'><img src={twitter} alt="twitter-icon" className='img-icon'/></a></div>
        </div>
        <div className='m-5'>
       <button className="btn flex w-30 p-3"> <Link to="/projects"> Projects <ArrowRight className='inline-block' /></Link></button>
      
     </div>
      </div>
      <Routes>
        <Route path="/projects" element={<Projects Me />} />
      </Routes>
    </>
    
  );
};

export default Contact;