import { useContext } from "react";
import { QuestContext } from "./QueData";
import { useParams } from "react-router";
export default function F2()
{
    const {queId}=useParams()
    const {queData}=useContext(QuestContext)
    const data1=queData.find((val)=>val.id==queId)
    console.log(queData)
    return(<div>
        <h1>Answers</h1>
        <h2>{data1.answer}</h2>
    </div>)
}