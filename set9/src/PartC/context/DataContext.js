import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
export const PizzaContext=createContext()
export function PizzaProvider({children})
{
    const [Pizza,setPizza]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const resData=await fakeFetch("https://example.com/api/menu")
            setPizza(resData.data.menu);
        }
        url()
    },[])
    return(
        <PizzaContext.Provider value={{Pizza}}>
            {children}
        </PizzaContext.Provider>
    )
}