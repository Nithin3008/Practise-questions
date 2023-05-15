import { Link } from "react-router-dom";

export default function F1()
{
    return(<div>
        <h1>My MailBox</h1>
        <ul>
            <li><Link to="/Inbox">Inbox</Link></li>
            <li><Link to="/SentMails">Sent</Link></li>
        </ul>
      
       
    </div>)
}