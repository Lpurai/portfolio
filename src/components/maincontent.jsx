import { Lightbulb } from "lucide-react";
import { projects } from "../data/projects";
import { useState } from "react";
import Section from "./infoCard";
import { CheckCircle } from "lucide-react";
const MainContent=({selectProject})=>{
  const projectsCompleted=3;
  const Technologies=5;
  const yearOfExp=1;
  const project=projects.find(p=>p.id===selectProject);   
return(
  <>   
      {
      project &&
      (<>
      <div id="mainContent-div" className="flex flex-col space-y-3 no-scrollbar h-screen mt-14 ml-20 w-screen overflow-x-hidden  overflow-y-scroll md:ml-31">
          <h1>{project.title}.</h1>
          <p>{project.description}</p>
          <div className="flex flex-col space-y-10 lg:flex-row  lg:space-x-20">
          <div className="flex flex-col space-y-2 md:ml-10 md:pr-100">
            <h2 className="">Project Features:</h2>
            {project.Features.map((f,i)=><li key={i} className=" list-disc">{f}</li>)}

          </div>
            <div className="flex flex-col md:ml-10 space-y-3">
            <h2>Technologies Used:</h2>
            {project.technologies.map((t,i)=><span key={i}><CheckCircle size={20} className="inline-block mr-2"/>{t}</span>)}
            </div>

          </div>
          <h2>Screenshot(s) of the Project</h2>
          <div className=" flex flex-col  lg:flex-row shadow-lg">

            {project.images.map((img,i)=><div className="max-w-4xl mx-autoflex">
            <img key={i} src={img} className="w-full h-auto rounded-4xl p-20 bg-cover"/>
            </div>)}
          </div>
          <div className="p-5">
            <p className="">Do you want to check the Project? <span> Here is the link to my github account &#128071;</span></p> 
            {project.title==="Calculator App"&&(
            <a className="font-extrabold underline" target="_blank" href="https://github.com/Lpurai/simple-calculator.git">{project.title}</a>)}
            {project.title==="Personal Portfolio Website"&&(
            <a className="font-extrabold underline" target="_blank" href="https://github.com/Lpurai/my--portfolio.git">{project.title}</a>
            )}
            {project.title==="Poultry Farm Management System"&&(
            <a className="font-extrabold underline" target="_blank" href="https://github.com/Lpurai/Group-12-Bcs-213-assignment.git">{project.title}</a>
            )}


          </div> 

            
      
        </div>
        
    </>
    

      
    )}{!project &&( 
        <div className="flex flex-col space-y-5 md:pt-3 h-screen mt-13 ml-20  md:mt-16 md:ml-31">
          <h2> Choose a project from the Sidebar to explore my Work.</h2>
          <p className="flex "> <Lightbulb  size={30}/>Every great project starts with an idea. Select one to see the execution.</p>
            <section className="flex flex-col space-y-10 items-center justify-center bg-background md:w-1/2 md:justify-center p-5 w-3.4 ml-12  md:ml-50 md:p-10 shadow-lg">
              <Section
              name="Projects Completed"
              amount={projectsCompleted}
              />
              <Section
              name="Technologies Used"
              amount={Technologies}
              />
              <Section
              name="Years of Experience"
              amount={yearOfExp}
              />
            </section>
          </div>
    )
  
  }



   
  

  </>
)
}
export default MainContent;
