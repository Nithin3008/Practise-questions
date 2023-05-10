import { useEffect, useState } from "react";
import { fakeFetch } from "./Fakefetch/fakefetch4";
export default function Ff1({heading,width,height})
{
        const [data1,setData]=useState("")
        useEffect(()=>{
            const url=async ()=>{
                const receiveData=await fakeFetch('https://example.com/api/user')
                console.log(receiveData.data)
                setData(receiveData.data)
            }
            url()
        },[])
    
    return(<div>
        <h1>{heading}</h1>
        <img src={data1.image} style={{width:`${width}px`, height:`${height}px`}}></img>
        <p>Name:{data1.name}</p>
        <p>likes:{data1.likes}</p>
        <p>comments:{data1.comments}</p>
    </div>)
}