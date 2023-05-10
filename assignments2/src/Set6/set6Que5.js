import { fakeFetch } from "./fakeFetch/fakeFetch5";
import {useEffect, useState} from "react"
export default function FF5()
{
    const [outputData,setOutput]=useState([])
    useEffect(()=>{
        const url=async()=>
        {
            try{
                const recieveData=await fakeFetch('https://example.com/api/posts')
                console.log(recieveData.data.posts)
                setOutput(recieveData.data.posts)
            }
            catch(err)
            {
                if(err.status==404)
                {
                    console.log('please check ur u *****')
                }
            }
            
        
       } 
       url();

    },[])
    function bakeryItems()
    {
        setOutput(outputData.filter((val)=>val.category=="Bakery"))
    }
    return(<div>
        {outputData.map((val)=><div style={{display:"inline-block",margin:"20px 20px"}}><img src={val.src}></img><p>{val.caption}</p><p>Likes:{val.likes}</p><p>Views: {val.views}</p></div>)}
        <button onClick={()=>bakeryItems()}>Show Bakery</button>
    </div>)
}