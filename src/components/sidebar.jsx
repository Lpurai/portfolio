import { useState } from "react";
import{Menu,Folder,Globe,Database, Icon} from "lucide-react";
import { projects } from "../data/projects";


export default function Sidebar({setSelectedProject}){
const[open,setOpen]=useState(false);



  return(
  <>
  <div id="sidebar-div" className={` bg-primary text-background ${open?"md:w-66 w-50":" w-18 md:w:20"} duration-300 p-5 pt-10  flex flex-col space-y-8 fixed h-screen  mt-12 md:top-16 left-0`}>
   
    <Menu size={28} className="cursor-pointer  " onClick={()=>setOpen(!open)}/>
  <h1 className={`text-xl font-bold  transition-all ${!open && "scale-0"}`}>
    Projects
  </h1>
  
  <ul className="space-y-10 ">
   {projects.map((project)=>{
    const Icon =project.icon;
    return(
      <li key={project.id}>
     <Icon onClick={()=>{
    console.log("project selected",project.id)
    setSelectedProject(project.id);
    }}
     size={30}  className="inline-block cursor-pointer" /><span className={`${!open && "hidden"} `}> {project.id} </span>
      </li>)})
   }
     
  </ul>

  
 
  </div>
  </>
  
)

}