import { useContext } from "react";
import { QuestContext } from "./QueData";
import { Link } from "react-router-dom";
export default function F2()
{
    const {queData}=useContext(QuestContext)
    console.log(queData)
    return(<div>
        {queData.map((val)=><div><p>{val.question}</p> <button>Upvode</button> <button>downvote</button> <Link to={`/AnswerPage/${val.id}`}>Answer</Link></div>)}
    </div>)
}