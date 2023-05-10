import { useEffect, useState } from "react"
import {fakeFetch} from "./fakeFetch2"
export default function FF10()
{
    const [movieOutput,setOutput]=useState([])
    const [movieCategory,setCategory]=useState("All")
    const [movieFilter,setFilter]=useState("All")
    useEffect(()=>{
        const url=async()=>{
            const movieData=await fakeFetch('https://example.com/api/movies')
            console.log(movieData.data)
            setOutput(movieData.data)
        }
        url()
    },[])
    function movieHandler(event)
    {
        const genre=event.target.value
        setCategory(genre)
    }
   function ratingHandler(event)
    {
        const number1=event.target.value
        
        setFilter(number1)
    }
    const data=movieCategory==="All"?movieOutput:movieOutput.filter((val)=>val.category===movieCategory)
    const data1=movieFilter==="All"?data:data.filter((val)=>val.rating>=movieFilter)
    
    return(<div>
        <h1>Movie Selector</h1>
        Category filter:<input type="radio" onChange={movieHandler} value="All" checked={"All"===movieCategory}></input>All
        <input type="radio"  onChange={movieHandler}  value="Action" checked={"Action"===movieCategory}></input>Action
        <input type="radio"  onChange={movieHandler}  value="Crime"  checked={"Crime"===movieCategory}></input>crime
        <input type="radio"  onChange={movieHandler}  value="Drama"  checked={"Drama"===movieCategory}></input>Drama
        Rating Filter:<select onChange={ratingHandler}>
            <option value="All">All</option>
            <option value={8.0}>8.0+</option>
            <option value={8.5}>8.5+</option>
            <option value={9.0}>9.0+</option>
            <option value={9.5}>9.5+</option>
        </select>
        <h2>Movies List</h2>
        {/* {data.map((val)=><p>{val.title}</p>)} */}
        {data1.map((val)=><p>{val.title}</p>)}
    </div>)
}