import {useEffect, useState} from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch1"
export default function Ff1()
{
    const [data,setInput]=useState([])
    const [genre,setGenre]=useState("Shoes")
    useEffect(()=>
    {
        const url=async()=>{
            const recieveData=await fakeFetch('https://example.com/api/products')
            console.log(recieveData.data.products)
            setInput(recieveData.data.products)
        }
        url()
    },[])
    
    const productHandler=(name1)=>setGenre(name1)
    console.log(genre)
    const outPutdata=data.filter((val)=>val.name==genre)
    return(<div>
        
        {data.map((val)=><button onClick={()=>productHandler(val.name)}>Show {val.name}</button>)}
        {outPutdata.map((val)=><div><img src={val.src}></img>Price:{val.price} Desc:{val.desc}</div> )}
    </div>)
}