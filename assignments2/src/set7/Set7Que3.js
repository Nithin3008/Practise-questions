import { useEffect, useState } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch3"
export default function FF3()
{
    const [outputData1,setOutput]=useState([])
    const [year1,setYear]=useState("All")
    useEffect(()=>
    {
        const url=async ()=>{
            const receiveData=await fakeFetch('https://example.com/api/movies')
            console.log(receiveData.data)
            setOutput(receiveData.data)
        }
        url()
    },[])
    function yearHandler(event)
    {   
        console.log(event.target.value)
        setYear(event.target.value)
    }
    const outputData=year1==="All"?outputData1:outputData1.filter((val)=>val.year==year1)
    return(<div>
        <h1>Movies</h1>
        Filter By year:<select onChange={yearHandler}>
            <option value="All">All</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
        </select>
        {outputData.map((val)=><li>Name: {val.title}<p>Year: {val.year}</p><p>Rating: {val.rating}</p></li>)}
    </div>)
}