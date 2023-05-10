import { useEffect, useState } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch4"

export default function FF4()
{
    const [outPutData,setOutput]=useState([])
    
    useEffect(()=>{
        const url=async()=>{
            const recieveData=await fakeFetch('https://example.com/api/videos')
            // console.log(recieveData.data.videos)
            setOutput(recieveData.data.videos)
        }
        url()
    },[])
    function deleteVideo()
    {
      
        // setOutput(outPutData.filter((val,index)=>index!==0))
        outPutData.pop()
        const final= [...outPutData]
       
        setOutput(final)
        
    
        
    }
    console.log("hi")
    return(<div>
        <h1>Playlist</h1>
        {outPutData.map((val)=><div key={val.title} style={{display:"inline-block",margin:"20px 20px"}}><img src={val.thumbnail}></img><p>View:{val.views}</p><p>Likes:{val.likes}</p></div>)}
        <button onClick={()=>deleteVideo()}>Delete Video</button>
    </div>)
}