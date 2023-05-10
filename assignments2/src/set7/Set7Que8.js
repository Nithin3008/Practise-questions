import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch7";
export default function Ff8()
{
    const [outputData,setOutput]=useState([])
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/products')
            console.log("set 7 que 7",recData.data.products)
            setOutput(recData.data.products)
        }
        url()
    },[count])
  
    function lowtoHighHandler()
    {
        outputData.sort((a,b)=>
        {
            return a.price-b.price
        })
        // console.log(outputData)
        const newArr=[...outputData]
        setOutput(newArr)
    }
    function hightoLowHandler()
    {
        outputData.sort((a,b)=>
        {
            return b.price-a.price
        })
        // console.log(outputData)
        const newArr=[...outputData]
        setOutput(newArr)
    }
    function ResetHandler()
    {
       setCount(count+1)
    }
    return(<div>
        <hr></hr>
        <h1>
            Products list 2
        </h1>
        <button onClick={()=>lowtoHighHandler()}>Low to high</button>
        <button onClick={()=>hightoLowHandler()}>Low to high</button>
        <button onClick={()=>ResetHandler()}>Reset</button>
        {outputData.map((val)=><div><h1>{val.name}</h1><p> {val.price} {val.quantity}</p></div>)}
    </div>)
}