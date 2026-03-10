import{Menu,Folder,Globe,Database, Icon} from "lucide-react";
import calc from "../assets/calculator.png";
import poultry1 from "../assets/poultry1.png";
import poultry2 from "../assets/poultry2.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png"


export const projects =[
   {
   id:"Featured Projects",
   title:"Calculator App",
   icon:Folder,
   images:[
      calc,
   ],
   Features: [
      "Addition ",
      "Subtraction",
      "Multiplication",
      " Division",
      " Clear (DELETE) button",
      " Responsive design"
   ],
   technologies:[
      "HTML",
      "CSS",
      "Javascript",
   ],
   description:"A simple and responsive calculator web app that performs basic arithmetic operations like addition, subtraction, multiplication, and division. Built to strengthen my JavaScript logic and DOM manipulation skills.",
   },
{
 id:"poultry",
 title:"Poultry Farm Management System",
 images:[
    poultry1,
    poultry2,
  ],
 description:"Designed to simplify poultry farm operations and improve productivity through digital tracking.",
 Features:[
    "Track chicken inventory",
    "Monitor daily egg production",
    "Record sales and expenses",
    "Generate basic farm reports"],
 technologies:[
    "Javascript",
    "React",
   " Tailwind CSS",
    "Node.js",
    "MySQL"
  ],
 icon:Database,
  },
{
 id:"portfolio",
 title:"Personal Portfolio Website",
 images:[
    portfolio1,
    portfolio2,
  ],
 description:"A modern and responsive personal website showcasing my projects, skills, and contact information.",
 Features:[
    "Responsive design for all devices",
    "Project showcase section",
    "Contact form",
    "Clean and modern UI"],
 technologies:[
    "Javascript",
    "React",
   " Tailwind CSS",
   "Lucide React Icons",
  ],
  icon:Globe
  },
];
 


