import { useEffect, useState } from "react";
import { fakeFetch } from "./Fakefetch/fakefetch5";
export default function FF5()
{
    const [data1,setData]=useState([])
    const [LoadState,setLoad]=useState(true)
    
        useEffect(()=>{
            const url=async ()=>{
                const receiveData=await fakeFetch('https://example.com/api/users')
                console.log(receiveData.data)
                
                setData(receiveData.data)
                setLoad(false)
                
            }
            url()
            
        },[])
    
    return(<div>
        <h1>Multi Users</h1>
        <h2 style={{visibility: LoadState?"visible":"Hidden"}}>Loading</h2>
        {
            data1.map((val)=><div><img src={val.image} style={{height:"300px" ,width:"300px"}}></img> <p>Name:{val.name}</p> <p>comments:{val.comments}</p> <p>Likes:{val.likes}</p></div>)
        }
    </div>)
}