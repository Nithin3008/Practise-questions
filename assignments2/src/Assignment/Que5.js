import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
export default function FF7()
{
    const [data1,setData]=useState([])
    useEffect(()=>{
        const url=async ()=>{
            const receiveData=await fakeFetch('https://example.com/api/userchats')
            console.log(receiveData.data)
            setData(receiveData.data)
        }
        url()
    },[])
    return(<div>
        {data1.map((val,index)=>(index+1)%2==0?<p>You:{val}</p>:<p>User:{val}</p>)}
    </div>)
}