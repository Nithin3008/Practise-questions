import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch7";
export default function FF7()
{
    const[outputData,setOutput]=useState([])
    const[projectDetails,setProject]=useState("")
        useEffect(()=>{
            const url=async()=>
            {
                const recieveData=await fakeFetch('https://example.com/api/projects')
                console.log(recieveData.data.projects)
                setOutput(recieveData.data.projects)
            }
            url()
        },[])
        function projectHandler(id)
        {
            setProject(outputData.find((val)=>val.title==id))
        }
       
       
    return(<div>
        <h1>Projects</h1>
        {outputData.map((val)=><div><p><span style={{fontWeight:"bold"}}>Name: </span >{val.title}</p><p><span style={{fontWeight:"bold"}}>Description: </span>{val.description}</p><button onClick={()=>projectHandler(val.title)}>Show Details</button></div>)}
        <h1>Project Details</h1>
        <div><p><span>Name:</span>{projectDetails.title}</p><p><span>Description</span>{projectDetails.description}</p><p><span>Technologies: </span>{projectDetails.technologies}</p><p><span>Completed: </span>{projectDetails.completed}</p></div>

    </div>)
}