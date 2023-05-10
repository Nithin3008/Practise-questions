import { useState,useEffect } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch3"

export default function FF3()
{
    const [outputData,setOutput]=useState([])
    useEffect(()=>{
        const url=async ()=>{
            const recieveData=await fakeFetch('https://example.com/api/habits')
            console.log(recieveData.data.habits)
            setOutput(recieveData.data.habits)
        }
        url()
    },[])
    return(<div>
        <h1>Habbit Tracker</h1>
        {<ul>{outputData.map((val)=><li><h2>{val.title}</h2><p>{val.desc}</p><p>Days Followed:{val.daysFollowed}</p><p>Days Skipped:{val.daysSkipped}</p></li>)}</ul>}
    </div>)
}