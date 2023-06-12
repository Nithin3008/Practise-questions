
import { createContext, useState } from "react";
export const WatchContext=createContext()
export function WatchProvider({children})
{
    const [watchVideo,setWatched]=useState([ {
        id: 1,
        title: 'Introduction to React',
        description:
          'Learn the basics of React in this introductory tutorial',
        url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
        thumbnail:
          'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
        duration: '12:35',
      },])
    function AddtoWatched(items,event)
    {
        let newList
        event.target.innerText="Added to Watch Later"
        const existed=watchVideo.find((val)=>val.id===items.id)
        if(existed==undefined)
        {
            newList=[...watchVideo,items]
        }
        else if(existed.id===items.id)
        {
            newList=watchVideo
        }
        else{
            newList=[...watchVideo,items]
        }
        setWatched([...newList])
    }
    return(<WatchContext.Provider value={{AddtoWatched,watchVideo
    }}>
        {children}
    </WatchContext.Provider>)
}