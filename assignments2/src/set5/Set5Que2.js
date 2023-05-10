import { useEffect, useState } from "react";
import { fakeFetch } from "./Fakefetch/fakefetch2";

export default function Ff3()
{   const [opData,setOp]=useState([])
    const [totalOp,settotlOp]=useState([])
    
    const items=async ()=>
    {
        const data1=await fakeFetch('https://example.com/api/products')
        console.log("hello")
        setOp(data1.data.products)
        settotlOp(data1.data.products)
    }
    useEffect(()=>{
    
        items()
    },[])

    const great20=()=>setOp(totalOp.filter((val)=>val.quantity>20))
    const less20=()=>setOp(totalOp.filter((val)=>val.quantity<=20))
    //que4
    const less100=()=>setOp(totalOp.filter((val)=>val.price<=100))
    
    return(<div>
        {opData.map((val)=><li key={val.name}>{val.name} - {val.price} - {val.quantity}</li>)}
        <button onClick={()=>less20()}>less than 20</button>
        <button onClick={()=>great20()}>greater than 20</button>
        <button onClick={()=>less100()}>less thatn 100</button>
    </div>)
}