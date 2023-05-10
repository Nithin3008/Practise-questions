import { fakeFetch } from "./fakeFetch/fakeFetch2";
import {useEffect, useState} from "react"
export default function FF2()
{   
    const [data,setData]=useState({})
    const [address1,setAddre]=useState(true)
    useEffect(()=>{
        const url= async ()=>
        {
            const data1=await fakeFetch('https://example.com/api/user')
            console.group(data1.data)
            setData(data1.data)
        }
        url()
    },[])
    function addressHandler()
    {
        setAddre(!address1)
        console.log(data.address)
    }
    console.log("hisda",data)
    return(<div>
        <h1>User</h1>
        <div>
            <div>
            <p>Name:{data?.name}</p>
            <p>Email: {data?.email}</p>
            <p>phone: {data?.phone}</p>
            </div>
            <button onClick={()=>addressHandler()}>Hide Address</button>
            <div  style={{visibility:address1 ?"visible":"hidden"}}>
            <p>{data?.address?.city}</p>
            <p>{data?.address?.street}            </p>
            <p>{data?.address?.suite} </p>
            <p>{data?.address?.zip}</p>
            </div>  
        
        </div>
    </div>)
}