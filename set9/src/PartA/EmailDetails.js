import { useContext } from "react";
import { EmailContext } from "./emailData";
import { useParams } from "react-router";
export default function F5()
{
    const {emailData,SendData}=useContext(EmailContext)
    const {eid}=useParams()
    let data1
    if(eid>=1 && eid<=5)
    {
        data1=emailData.find((val)=>val.id==eid)
    }
    else
    {
        data1=SendData.find((val)=>val.id==eid)
    }
   
    return(<div>
        <h1>Email-In detail</h1>
        <div>
            <h3>From: {data1.sender}</h3>
            <h2>Subject: {data1.subject}</h2>
            <p>Message: {data1.message}</p>
        </div>
        
    </div>)

}