import { VideoData } from "./Context/VideoData";
import { WatchContext } from "./Context/WatchLater";
import { LikeContext } from "./Context/LikeContext";
import { useContext } from "react";
export function Video1()
{
    const {videoData}=useContext(VideoData)
    const {AddtoLiked}=useContext(LikeContext)
    const {AddtoWatched}=useContext(WatchContext)
    console.log(videoData)

    return(
        <div>
            <p></p>
            <p></p>
            <p></p>
            <div style={{display:"flex"}}>
                {videoData.map((val)=>
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
                        <button onClick={(e)=>AddtoLiked(val,e)}>Like it</button>
                        <button onClick={(e)=>AddtoWatched(val,e)}>Add to watch</button>
                        </div>

                </div>)}
            </div>







        </div>
    )
}