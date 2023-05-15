import { fakeFetch } from "./fakeFetch";
import {createContext, useEffect, useState} from "react"
export const BookContext=createContext()
export function BookProvider({children})
{
    let [bookData,setBook]=useState([])
    let [FavData,setFav]=useState([])
    let [ReadData,setRead]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const recData=await fakeFetch('https://example.com/api/books')
            console.log(recData.data.books)
            setBook(recData.data.books)

        }
        url()
    },[])
    function addtoFav(values)
    {
        // const favid=FavData.length==0?"empty":FavData.find((val)=>val.id===values?"true":"false")
        if(FavData.length==0)
        {
            const x=bookData.find((val)=>val.id==values)
            FavData=[...FavData,x]
            // console.log(FavData)
            setFav(FavData)
        }
        else
        {
            const y=FavData.find((val)=>val.id==values?true:false)
            const x=y?FavData:[...FavData]
            setFav(x)
            
        }
        console.log(FavData)
     
    }


    return(
        <BookContext.Provider value={{bookData,FavData,ReadData,addtoFav}}>
            {children}
        </BookContext.Provider>
    )
}