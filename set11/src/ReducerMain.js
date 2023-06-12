import { createContext, useReducer,useContext } from "react";
import { data } from "./Data";
export const ReducerContext=createContext()

export function ReducerProv({children})
{
    
    const dataFilter=[...data]
    const mainData={data1:[...data],outOfStock:false,fastDelivery:false}
    const [state,dispatcher]=useReducer(TotalFun,mainData)
    function TotalFun(state,action)
    {
        if(action.type==="searchData")
        {
            let str=action.payload.toLowerCase()
            let x=dataFilter.filter((val)=>val.name.toLowerCase().includes(str))
            console.log(x)
            return {...state,data1:[...x]}
        }
        else if(action.type==="FillData")
        {
            return {...state,data1:[...data]}
        }
        else if(action.type==="hl")
        {
            console.log("hi")
            const x=state.data1.sort((a,b)=>b.price-a.price)
            return{...state,data1:[...x]}
        }
        else if(action.type==="lh")
        {
            console.log("hi")
            const x=state.data1.sort((a,b)=>a.price-b.price)
            return{...state,data1:[...x]}
            
        }
        else if(action.type==="outOfStock")
        {
            
            return{...state,outOfStock:!state.outOfStock}
            
        }
        else if(action.type==="fastDelivery")
        {
            
            return{...state,fastDelivery:!state.fastDelivery}
            
        }
        return state
    }
    console.log(state.outOfStock)

    return(<ReducerContext.Provider value={{dispatcher,state}}>{children}</ReducerContext.Provider>)
}