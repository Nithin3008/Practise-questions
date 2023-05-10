import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch9";
export default function Ff8()
{
    const [outputData,setOutput]=useState([])
    const [descData,setDesc]=useState([])
    // const [count,setCount]=useState(0)
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/products')
            console.log(recData.data.products)
            setOutput(recData.data.products)
            const newArr=[...outputData]
            newArr.sort((a,b)=>{
                return b.rating-a.rating
            })
            setDesc(newArr)
            console.log(newArr)
        }
        url()
    },[])
    
    return(<div>
        <hr></hr>
        <h1>Products 3</h1>
        {descData.map((val)=><div style={{display:"flex"}}>{val.name} {val.price} {val.quantity}<div></div>{val.rating}</div>)}
    </div>)
}