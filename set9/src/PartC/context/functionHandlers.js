import {  createContext, useContext, useEffect, useState } from "react";
import { PizzaContext } from "./DataContext";
export const HandlerContext=createContext()
export function HandlerProvider({children})
{
    const {Pizza}=useContext(PizzaContext)
    const [isVeg,setVeg]=useState(false)
    const [isSpicy,setSpicy]=useState(false)
    const [search,setSearch]=useState("")
  
    const settingVeg=(event)=>
    {
        setVeg(event.target.checked)
    }
    const settingSpicy=(event)=>
    {
        setSpicy(event.target.checked)
    }
    const settingSearch=(event)=>
    {
        setSearch(event.target.value.toLowerCase())
    }
    
  
    // if(isSpicy)
    // {
    //     newData=[...Pizza].filter((val)=>val.is_spicy===true)
    //     setFilter(newData)
    // }
    // if(isVeg)
    // {
    //     newData=[...Pizza].filter((val)=>val.is_vegetarian===true)
    //     setFilter(newData)
    // }
    
    const applyFilters=()=>
    {   
        let newData=[...Pizza]
        
        if(isVeg===true)
        {
            newData=newData.filter((val)=>val.is_vegetarian==true)
        }
        if(isSpicy===true)
        {
            newData=newData.filter((val)=>val.is_spicy==true)
        }
        if(search.length!==0)
        {
            newData=newData.filter((val)=>val.name.toLowerCase().includes(search))
        }
       return newData

    }
    let newData=applyFilters()
  
    
    return(<><HandlerContext.Provider value={{settingVeg,settingSpicy,settingSearch,newData}}>{children}</HandlerContext.Provider></>)
}