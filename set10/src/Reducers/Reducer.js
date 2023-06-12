import { createContext } from "react";
import { mails } from "../Context/fakeFetch";
import { useReducer } from "react";

export const ReducerContext=createContext()
export function ReduceProvider({children})
{
    
    const mailData={inbox:[...mails],trash:[],spam:[],showUnread:false,showStared:false}
    const extraMail=[...mails]
    const [state,dispatcher]=useReducer(MailFilter,mailData)
    // console.log(state)
   function MailFilter(state,action)
   {
    if(action.type=="unread-mails")
    {
        return action.payload?{...state,showUnread:true}:{...state,showUnread:false}
       
    }
    else if(action.type=="stared-mails")
    {
        return action.payload?{...state,showStared:true}:{...state,showStared:false}
    }
    else if(action.type=="markasRead")
    {
        const x=state.inbox.map((val)=>{
            if(val.mId==action.payload)
            {
                return {...val,unread:!val.unread}
            }
            return{...val}
        })
        return {...state,inbox:[...x]}
        
    }
    else if(action.type=="markStarred")
    {
        const x=state.inbox.map((val)=>{
            if(val.mId==action.payload)
            {
                return {...val,isStarred:!val.isStarred}
            }
            return{...val}
        })
        console.log(x)
        return {...state,inbox:[...x]}
        
    }
    else if(action.type=="sentToSpam")
    {
        let x={}
        const z=state.inbox.filter((val)=>
        {
            
           if(val.mId===action.payload)
           {
               x={...val}
           }
           else
           {
                return{...val}
           }

            
        })
        console.log(z,x)
        return {...state,inbox:[...z],spam:[...state.spam,x]}
       

    }
    else if(action.type=="sentToTrash")
    {
        let x={}
        const z=state.inbox.filter((val)=>
        {
            
           if(val.mId===action.payload)
           {
               x={...val}
           }
           else
           {
                return{...val}
           }

            
        })
        return {...state,inbox:[...z],trash:[...state.trash,x]}
       

    }
    else if(action.type=="trashToInbox")
    {
        let x={}
        const z=state.trash.filter((val)=>
        {
            
           if(val.mId===action.payload)
           {
               x={...val}
           }
           else
           {
                return{...val}
           }

            
        })
        return {...state,inbox:[...state.inbox,x],trash:[...z]}
       

    }
    else if(action.type=="spamToInbox")
    {
        let x={}
        const z=state.spam.filter((val)=>
        {
            
           if(val.mId===action.payload)
           {
               x={...val}
           }
           else
           {
                return{...val}
           }

            
        })
        return {...state,inbox:[...state.inbox,x],spam:[...z]}
       

    }
    
    
    return state
    }
    return(
        <ReducerContext.Provider value={{dispatcher,state}}>
            {children}
        </ReducerContext.Provider>
    )
    }