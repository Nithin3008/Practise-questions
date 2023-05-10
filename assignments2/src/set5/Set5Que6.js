import { useEffect, useState } from "react";
import { fakeFetch } from "./Fakefetch/fakefetch6";
export default function Ff6()
{
    const [data1,setData]=useState([])
    
    
        useEffect(()=>{
            const url=async ()=>{
                const receiveData=await fakeFetch('https://example.com/api/userchat')
                console.log(receiveData.data)
                
                setData(receiveData.data)
                
                
            }
            url()
            
        },[])

        return(<div>
            {/* {data1.map((val)=><p>{val.name} {val.messages.map((val1)=><p>{val1.name}</p>)}</p> )} */}
            {
                data1.map((val)=>
                
                    <p><h1>{val.name} Chat</h1>
                    {val.messages.map((val1)=><div><span style={{fontWeight:"bold"}}>{val1.from}</span>:{val1.message}</div>)}</p>
                )
            }
        </div>)
}