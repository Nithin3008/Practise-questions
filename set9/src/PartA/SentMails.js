import { useContext } from "react";
import { EmailContext } from "./emailData";
import { Link } from "react-router-dom";

export default function F9()
{
    const {SendData}=useContext(EmailContext)
    console.log(SendData)
   
    return(<div>
        <h1>Sent Page</h1>
        {SendData.map((val)=><li key={val.id}><Link to={`/EmailDetails/${val.id}`}>{val.subject}</Link></li>)}
    </div>)
}