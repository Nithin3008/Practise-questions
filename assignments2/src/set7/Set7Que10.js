import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch9";
export default function Ff8()
{
    const [outputData,setOutput]=useState([])
    // const [descData,setDesc]=useState([])
    const [type,setType]=useState("All")
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/products')
            console.log(recData.data.products)
            setOutput(recData.data.products)
            
        }
        url()
    },[])
    function changeHandler(event)
    {
        console.log(event.target.value)
        setType(event.target.value)
    }
    const outputData1=type=="All"?outputData:outputData.filter((val)=>val.name.toUpperCase()==type.toUpperCase())

    return(<div>
        Filter:<input onChange={changeHandler}></input>
        {outputData1.map((val)=><div>{val.name} {val.price} {val.quantity}</div>)}
    </div>)

}