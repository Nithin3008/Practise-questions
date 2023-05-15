import { useContext } from "react";
import { EmailContext } from "./emailData";
import { Link } from "react-router-dom";

export default function F2()
{
    const {emailData,markComplete}=useContext(EmailContext)
    const emailsCount=emailData.reduce(function(acc,val)
    {
        if(val.read==false)
        {
            return [acc[0],acc[1]+1]
        }
        else
        {
            return [acc[0]+1,acc[1]]
        }
    },[0,0])
    return(<div>
        <h1>Inbox Page</h1>
        <p>Unread Mails :{emailsCount[0]}</p>
        <p>Read Mails :{emailsCount[1]}</p>
        {emailData.map((val)=><li key={val.id}><Link to={`/EmailDetails/${val.id}`}>{val.subject}</Link> <button onClick={()=>markComplete(val.id)} style={{display:val.read?"none":""}}>Mark as Read</button></li>)}
    </div>)
}