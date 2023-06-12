import { createContext, useState } from "react";
import { BookContext } from "./DataContext";
export const FavContext=createContext()
export function FavProvider({children})
{
    
    const [Fav,setFav]=useState([{
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publisher: 'HarperCollins',
        year: 1960,
        image:
          'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg',
        price: 9.99,
        read: false,
      }])
    function AddToFav(books,e)
    {
        console.log(e.target)
        e.target.innerText="Added to Favourite"
        
        let favBook
        const finder=Fav.find((val)=>val.id==books.id)
        if(finder===undefined)
        {
            favBook=[...Fav,books]
        }
        else if(finder.id==books.id)
        {
            favBook=[...Fav]
        }
        else
        {
            favBook=[...Fav,books]
        }
        setFav([...favBook])
    }
    return(
        <FavContext.Provider value={{AddToFav,Fav}}>
            {children}
        </FavContext.Provider>
    )
}