import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const QuestContext=createContext()
export function QuestProvider({children})
{
    let [queData,setQue]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const recData=await fakeFetch('https://example.com/api/questions')
            console.log(recData.data.questions)
            setQue(recData.data.questions)
        }
        url()
    },[])

    return(
        <QuestContext.Provider value={{queData}}>
            {children}
        </QuestContext.Provider>
    )
}