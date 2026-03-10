export default function Section ({name,amount})
{
  return(
    <>
    
    <div className="flex flex-row  space-x-2">
      <h2>{name}:</h2>
      <div  id="projectCompleted" className="text-primary font-extrabold rounded-xl  w-18 h-10 pl-5 border focus:ring-2px focus:ring-darkMode">
       {amount}
      </div>
    </div>

    </>
  )
}