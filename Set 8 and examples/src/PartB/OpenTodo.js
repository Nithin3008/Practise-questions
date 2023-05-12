import { useContext } from "react";
import { TodoContext } from "./DataTodo";
import { Link } from "react-router-dom";
export default function F4()
{
    const {todoList}=useContext(TodoContext)
    console.log(todoList)
    const Output=todoList.filter((val)=>val.isCompleted===false)
    return(<div>
        <h1>Total List:{todoList.length}</h1>
        {Output.map((val)=><div><h1>{val.title}</h1><p>{val.description}</p><p>Status:{val.isCompleted?"Done":"Not Done"}</p><Link to={`/TodoDetails/${val.id}`}>Visit Todo</Link></div>)}
    </div>)
}