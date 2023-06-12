import { fakeFetch } from "./fakeFetch";
import { createContext, useEffect, useState } from "react";
export const VideoData=createContext()
export function VideoProvider({children})
{
    const [videoData,setVideo]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const resData=await fakeFetch("https://example.com/api/videos")
            console.log(resData.data.videos)
            setVideo(resData.data.videos)
        }
        url()
    },[])

    return(
        <VideoData.Provider value={{videoData}}>
            {children}
        </VideoData.Provider>
    )
}