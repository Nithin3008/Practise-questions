import { fakeFetch } from "./fakeFetch";
import { createContext, useEffect, useState } from "react";

export const BookContext=createContext()
export function DataProvider({children})
{
    let [bookData,setBook]=useState([])
    useEffect(()=>
    {
        let url=async()=>
        {
            const resData=await fakeFetch("https://example.com/api/books")
            setBook(resData.data.books)
            console.log(resData.data.books)
        }
        url()
    },[])
    return(<BookContext.Provider value={{bookData}}>
        {children}
    </BookContext.Provider>)

}