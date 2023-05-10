import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch1";
export default function FF8()
{
    const [printData,setData]=useState([])
    const [inputData,setInput]=useState([])
    useEffect(()=>{
        const url=async()=>
        {
            const recieveData= await fakeFetch('https://example.com/api/usertweets')
            setData(recieveData.data)
            setInput(recieveData.data)
            console.log(recieveData.data)
        }
        url()
    },[])
    const more50=()=>setData(inputData.filter((val)=>val.likes>=50))
    const showAll=()=>setData(inputData)
    return(<div>
        <button onClick={more50}>Show tweets with morethan 50 likes</button>
        <button onClick={showAll}>Show all tweets</button>
        {printData.map((val)=><div style={{border:"5px skyblue solid ",margin:"10px"}}><h1>{val.content}</h1><p>Likes{val.likes} Views:{val.views}</p></div>)}
    </div>)
}