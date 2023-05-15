import {createContext, useEffect, useState} from "react"
import { fakeFetch } from "./fakeFetch"

export const EmailContext=createContext()
export function EmailProvider({children})
{
    let [emailData,setEmails]=useState([])
    let [SendData,setSend]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const recData=await fakeFetch('https://example.com/api/allemails')
            console.log(recData.data.emails)
            setEmails(recData.data.emails)
            setSend(recData.data.sentEmails)
        }
        url()
    },[])
    function markComplete(values)
    {
        const x=emailData.filter(function(val)
        {
            if(val.id==values)
            {
                val.read=true
                return val
            }
            return val
        })
        emailData=[...x]
        console.log(emailData)
        setEmails(emailData)
    }
    return(
        <EmailContext.Provider value={{emailData,markComplete,SendData}}>
            {children}
        </EmailContext.Provider>
    )
}