import coder from '../assets/coder.webp';
import reactLogo from '../assets/react.svg';
import tailwind from  '../assets/tailwind.png';
import js from '../assets/js.png';
import nodejs from '../assets/nodejs.jpeg';
import mysql from '../assets/mysql.png'
const About = () => {
  return (
  <>
  <div className='mt-16'>
   <div>
    <nav className="navbar  ">
   
  <a href="#introduction" >Introduction</a>
  <a href="#Skills">Skills</a>
  <a href="#Mission">Mission</a>
  </nav>
  </div>
  
      <div className="card-row mt-17" id="introduction">
        <h3> &#128075;Hey,</h3>
        <h1>&#128100;About Me</h1>
        <p>My journey into technology began with curiosity- a desire to understand how digital systems work and how technology can be used to solve real-life problems.What started as a simple interest gradually grew into a passion for software development and system design.</p>
        <p>I am currently pursuing my studies in Computer Science at <span className="text-darkmode font-extrabold">Masinde Muliro University Of Science and technology</span>,where I continue to strenghten both my technical knowledge and problem-solving skills.</p>
        <p>I am particularly interested in modern web development.Beyond coding, I value continuous learning,collaboration,and personal growth.I believe technology is most powerful when it improves people's lives,and aim to contribute to solutions that have real impact in communities.</p>
        <div className='w-full h-screen flex space-x-3  '>
          <div className='mt-50 flex flex-row font-extrabold'>Code. Create.Solve</div>
          <img src={coder}  className=' rounded-full w-90 h-90 shadow-lg w-90 h-90 md:w-130 md:h-130' />
          </div>
      </div>
       <div className="card-col"id="Skills">
       <div><h1>🏆Technical Skills & Expertise</h1>
        <p>I am proficient in designing and developing scalable, user-friendly web applications with a strong focus on frontend development. My core technical skills include:</p>
        <ul className="list-disc ml-3 text-primary font-extrabold">
          <li>Programming Languages: JavaScript, C, C++</li>
          <li>Frontend Development: React, Tailwind CSS, Bootstrap</li>
          <li>Version Control & Tools: Git, GitHub, Vite</li>
          <li>UI/UX Design: Building clean, responsive interfaces with attention to accessibility and user experience</li>
        </ul>
        <p>I take pride in writing maintainable, modular code and continuously improving performance and scalability. I enjoy turning complex problems into intuitive and elegant solutions.</p>
       <div className='flex flex-col md:flex-row space-x-4  md:space-x-6 mb-20 m-4' >
        <h2>Tech Stacks:</h2>
        <img src={js} alt="js-icon" className='img-others ' />
        <img src={reactLogo} alt="react-icon" className='img-others' />
        <img src={tailwind} alt="tailwind-icon" className='img-others '/>
        <img src={mysql} alt="mysql-icon" className='img-others rounded-sm'/>
        <img src={nodejs} alt="nodejs-icon" className='img-others '/>
        
       </div>
       
       </div>
       <div>
        <h1>Soft Skills</h1>
       <p>Alongside technical expertise, I bring strong problem-solving abilities, effective communication, and a disciplined approach to project management. I am committed to delivering high-quality work, meeting deadlines, and collaborating efficiently with teams.</p>
      
       </div>
       </div>
    
      <div className="card-row"id="Mission">
       <h1> 🎯 Mission</h1>
        <p>My mission is to design and develop intuitive, accessible, and high-performance web applications that provide meaningful value to users.
          I am committed to writing clean, maintainable code and continuously expanding my technical knowledge in order to contribute effectively to innovative teams and impactful projects.
      </p>
      <h1>🚀 Vision</h1>
      <p>
      My vision is to grow into a highly skilled software engineer capable of building scalable systems and leading impactful technological solutions.
      I aspire to contribute to forward-thinking organizations, develop products that improve lives, and establish a long-term career defined by excellence, discipline, and continuous learning.</p>
     </div>
   
  </div>
  
  </>
    
  );
};

export default About;