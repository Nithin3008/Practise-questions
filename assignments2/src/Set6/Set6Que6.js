import { fakeFetch } from "./fakeFetch/fakeFetch6";
import { useEffect,useState } from "react";
export default function FF6()
{
    const[head,setHead]=useState("Unarchived")
    const[outPutData1,setOutput]=useState([])
    useEffect(()=>{
        const url=async()=>
        {
            const recieveData=await fakeFetch('https://example.com/api/habits')
            console.log(recieveData.data.habits)
            setOutput(recieveData.data.habits)
        }
        url()
    },[])
    function archivedItems()
    {
        console.log(head)
        setHead("Archived")
        
    }
    console.log("dashdg")
    const outPutData=head=="Archived"?outPutData1.filter((val1)=>val1.archived==true):outPutData1.filter((val1)=>val1.archived==false)
    console.log(outPutData1)
    return(<div>
        <h1>{head}</h1>
        {outPutData.map((val)=><div><h2>{val.title}</h2><p>{val.desc}</p> <p><span>Days Followed</span>:{val.daysFollowed}</p><p><span>Days Skipped</span>:{val.daysSkipped}</p></div>)}
        <button onClick={()=>archivedItems()}c>Show Archived</button>
    </div>)
}