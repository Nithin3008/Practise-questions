import { useEffect, useState } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch9"

export default function FF9()
{
    const [useData,setData]=useState({})
    useEffect(()=>{
        const url=async()=>{
            const receData=await fakeFetch('https://example.com/api/getvideo')
            console.log(receData.data.videos)
            setData(receData.data.videos)
        }
        url()
    },[])
    function addLable()
    {
        const newLabel={...useData}
        newLabel.label="Self-motivation"
        setData(newLabel)
    }
    return(<div>
        <div>
            <p><img src={useData.thumbnail}></img></p>
            <p>Title: {useData.title}</p>
            <p>Likes: {useData.likes}</p>
            <p>Views: {useData.views}</p>
            <p style={{visibility:useData.label=="Self-motivation"?"visible":"hidden"}}>Label: {useData.label}</p>
        </div>
        <button onClick={()=>addLable()}>Add label</button>
    </div>)
}