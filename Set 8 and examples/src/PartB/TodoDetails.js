import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "./DataTodo";
export default function F8()
{
    const {todoList}=useContext(TodoContext)
    const {todoId}=useParams()
    const outputTodo=todoList.find((val)=>val.id==todoId)
    console.log(outputTodo)
    return(
        <div>
            <h1>{outputTodo.title}</h1>
            <p>Description: {outputTodo.description}</p>
            <p>{outputTodo.isCompleted?"Done":"Not Done"}</p>
        </div>
    )
}