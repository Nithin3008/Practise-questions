import { createContext, useState } from "react";
export const LikeContext=createContext()
export function LikeProvider({children})
{
    const [likedVideo,setLiked]=useState([{
        id: 2,
        title: 'JavaScript for Beginners',
        description:
          'Get started with JavaScript with this beginner-friendly tutorial',
        url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        thumbnail:
          'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
        duration: '20:17',
      },])
    function AddtoLiked(items,event)
    {
        let newList
        event.target.innerText="Added to Liked"
        const existed=likedVideo.find((val)=>val.id===items.id)
        if(existed==undefined)
        {
            newList=[...likedVideo,items]
        }
        else if(existed.id===items.id)
        {
            newList=likedVideo
        }
        else{
            newList=[...likedVideo,items]
        }
        setLiked([...newList])
    }
    return(
        <LikeContext.Provider value={{AddtoLiked,likedVideo}}>
            {children}
        </LikeContext.Provider>
    )
}