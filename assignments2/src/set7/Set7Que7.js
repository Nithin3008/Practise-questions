import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch7";
export default function Ff7()
{
    const [outputData,setOutput]=useState([])
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/products')
            console.log("set 7 que 7",recData.data.products)
            setOutput(recData.data.products)
        }
        url()
    },[])
    function soryHandler()
    {
        outputData.sort((a,b)=>
        {
            return a.price-b.price
        })
        console.log(outputData)
        const newArr=[...outputData]
        setOutput(newArr)
    }
    return(<div>
        <h1>
            Products list
        </h1>
        <button onClick={()=>soryHandler()}>Sort by button</button>
        {outputData.map((val)=><div><h1>{val.name}</h1><p>{val.description} {val.price} {val.quantity}</p></div>)}
    </div>)
}