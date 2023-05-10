import { useState,useEffect } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch2";
export default function FF2()
{
    const [outputData,setOutput]=useState([])
    useEffect(()=>
    {
        const url=async()=>{
            const recieveData=await fakeFetch('https://example.com/api/todos')
            console.log(recieveData.data.todos[0].todos)
            setOutput(recieveData.data.todos)
        }
        url()
    },[])
    return(<div>
        {outputData.map((val)=><div><h1>{val.title}</h1><ol>{val.todos.map((val1)=><li>{val1}</li>)}</ol></div>)}
    </div>)
}