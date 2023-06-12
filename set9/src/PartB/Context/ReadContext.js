import { createContext, useState } from "react";
import { BookContext } from "./DataContext";
export const ReadContext=createContext()
export function ReadProvider({children})
{
    
    const [Read,setRead]=useState([{
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
    function AddToRead(books,e)
    {
        console.log(e.target)
        e.target.innerText="Already Read"
        e.target.style.disable=true
        
        let favBook
        const finder=Read.find((val)=>val.id==books.id)
        if(finder===undefined)
        {
            favBook=[...Read,books]
        }
        else if(finder.id==books.id)
        {
            favBook=[...Read]
        }
        else
        {
            favBook=[...Read,books]
        }
        setRead([...favBook])
    }
    return(
        <ReadContext.Provider value={{AddToRead,Read}}>
            {children}
        </ReadContext.Provider>
    )
}