import { createContext, useState } from "react";

export const SpamContext=createContext()
export function SpamProvider({children})
{
    const [SpamData,setSpam]=useState([])
    function AddtoSpam(items)
    {

    }
    return(<SpamContext.Provider value={{SpamData,AddtoSpam}}>{children}</SpamContext.Provider>)
}