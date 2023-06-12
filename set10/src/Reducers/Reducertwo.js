import { mails } from "../Context/fakeFetch";
import { useReducer,createContext } from "react";
export const ReducerSpmTraContext=createContext()
export function ReducerSpmTraProv({children})
{
    const data={spam:[],trash:[]}
    const mailData=[...mails]
    const [state,dispatcher2]=useReducer(SpmTraFilter,data)
    // console.log(state.spam,state.trash,mailData)
    function SpmTraFilter(state,action)
    {
        
        if(action.type==="moveToSpam")
        {
            
            const x=mailData.find((val)=>
            {   
                
                if(val.mId===action.payload)
                {
                    
                    return {...val}
                    // return{...val}
                }
            })
            return {spam:[...state.spam,x],trash:[...state.trash]}

        }
        else if(action.type==="moveToTrash")
        {
            
            const x=mailData.find((val)=>
            {   
                
                if(val.mId===action.payload)
                {
                    
                    return {...val}
                    // return{...val}
                }
            })
            return {spam:[...state.spam],trash:[...state.trash,x]}

        }
        return state
    }
    return(<ReducerSpmTraContext.Provider value={{dispatcher2,tashCan:state.trash,spamCan:state.spam}}>
        {children}
    </ReducerSpmTraContext.Provider>)
}