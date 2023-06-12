import { WatchContext } from "./Context/WatchLater";

import { useContext } from "react";
export function Watch1()
{
    const {watchVideo}=useContext(WatchContext)
    return(<div>
        <h1>Watch Later</h1>
         <div style={{display:"flex"}}>
                {watchVideo.map((val)=>
                <div style={{border:"2px solid black",ustifyContent: "space-between",
                flexWrap: "wrap"}}>
                    <div>
                        <img src={val.thumbnail}></img>
                    </div>
                    <div>
                        <h3>{val.title}</h3>
                        <a href={val.url}>Watch Here</a>
                        <p>Description: {val.description}</p>
                        <p>Duration: {val.duration} </p>
                        
                        </div>

                </div>)}
            </div>
    </div>)
}