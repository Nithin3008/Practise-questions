
import { useEffect, useState } from "react";
import { fakeFetch } from "./Fakefetch/fakefetch7";
export default function FF9()
{
    const [data1,setData]=useState([])
    
  
        useEffect(()=>{
            const url=async ()=>{
                const receiveData=await fakeFetch('https://example.com/api/comments')
                console.log(receiveData.data.comments)
                
                setData(receiveData.data.comments)
                
                
            }
            url()
            
        },[])
        function deleteId(id)
        {
            setData(data1.filter((val)=>val.name!==id))
        }
        return(<div>
            <h1>Comments            </h1>
            {data1.map((val)=><div key={val.name}><h3>{val.name}</h3><p>{val.text}</p><button onClick={()=>deleteId(val.name)}>Delete</button></div>)}
        </div>)
}