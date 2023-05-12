import { useContext } from "react";
import { TodoContext } from "./DataTodo";

export default function F2()
{
    const {todoList,markDoneTodo}=useContext(TodoContext)
    console.log(todoList)
    return(<div>
        {todoList.map((val)=><div key={val.id}><h1 style={{textDecoration:val.isCompleted?"line-through":""}}>{val.title}</h1><p style={{textDecoration:val.isCompleted?"line-through":""}}> {val.description}</p><button onClick={()=>markDoneTodo(val.id)}>Mark as Done</button></div>)}
    </div>)
}