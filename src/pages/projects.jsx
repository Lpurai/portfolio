import Sidebar from "../components/sidebar";
import { useState } from "react";
import MainContent from "../components/maincontent";
const Projects=()=>{
  
const [selectedProject,setSelectedProject]=useState("all");
  
 
return(
  <>
  <div className="flex flex-row">
    
    <Sidebar setSelectedProject={setSelectedProject}/>
    <MainContent selectProject={selectedProject}/>
   
  </div>

   
  

  </>
)
}
export default Projects;