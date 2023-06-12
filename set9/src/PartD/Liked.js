import { LikeContext } from "./Context/LikeContext";
import { useContext } from "react";
export function Like1()
{
    const {likedVideo}=useContext(LikeContext)
    return(<div>
        <h1>Liked Playlist</h1>
        <div style={{display:"flex"}}>
                {likedVideo.map((val)=>
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