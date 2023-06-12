import { useParams } from "react-router-dom"
import { mails } from "../Context/fakeFetch";
import { useEffect, useState } from "react";
export function Detail1()
{
    const {mailId}=useParams()
    const mailDetails=mails.find((val)=>val.mId==mailId)
    return(<div>
        <div style={{backgroundColor:"aquamarine",margin:"20px 20px",padding:"10px 10px",borderRadius:"5px"}}>
            <h1>{mailDetails.subject}</h1>
            <p>{mailDetails.content}</p>

        </div>
    </div>)
}