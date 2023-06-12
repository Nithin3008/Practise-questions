import { createContext, useEffect } from "react";
import {mails} from "./fakeFetch"
export const EmailContext=createContext()
export function EmailProvider({children})
{
    const MailData=[...mails]
    // console.log(MailData)

    return( <EmailContext.Provider value={{MailData}}>
        {children}
    </EmailContext.Provider>)
    

}