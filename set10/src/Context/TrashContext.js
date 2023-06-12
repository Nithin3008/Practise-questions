import { createContext, useState } from "react";

export const TrashContext=createContext()
export function TrashProvider({children})
{
    const[TrashData,setTrash]=useState([])
    function AddtoDelete(items)
    {

    }


    return(<TrashContext.Provider value={{TrashData,AddtoDelete}}>{children}</TrashContext.Provider>)
}