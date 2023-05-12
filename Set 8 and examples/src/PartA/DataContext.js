import { fakeFetch } from "./fakeFetch";
import {createContext,useEffect,useState} from "react"
export const DataContext =createContext()
export function DataProvider({children})
{
    const [arrData,setData]=useState([])
    useEffect(()=>
    {
        const url=async()=>{
            const recData= await fakeFetch('https://example.com/api/products')
            setData(recData.data.products)
            console.log(recData.data.products)
        }
        url()
    },[])

    return(
        <DataContext.Provider value={{arrData}}>
            {children}
        </DataContext.Provider>
    )
}