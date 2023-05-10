import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch6";
export default function Ff6()
{
    const [outData,setOut]=useState([])
    const [genre1,setGenre]=useState("All")
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/movies')
            console.log(recData.data)
            setOut(recData.data)
        }
        url()
    },[])
    function genreHandler(event)
    {
        console.log(event.target.value)
        setGenre(event.target.value)
    }
    const outputData=genre1==="All"?outData:outData.filter((val)=>val.genre==genre1)
    return(<div>
        <h1>Movies Genre</h1>
        Filter by Gnere:<select onChange={genreHandler}>
            <option value="All">All</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Science Fiction">Science Fiction</option>
        </select>
        {outputData.map((val)=><p>{val.title} {val.year} {val.genre}</p>)}
    </div>)
}